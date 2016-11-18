
(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href=".html">WPKirk</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href=".html">WPBones</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:WPKirk_WPBones_Console" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="WPKirk/WPBones/Console.html">Console</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:WPKirk_WPBones_Console_Command" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="WPKirk/WPBones/Console/Command.html">Command</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:WPKirk_WPBones_Container" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="WPKirk/WPBones/Container.html">Container</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:WPKirk_WPBones_Container_Container" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="WPKirk/WPBones/Container/Container.html">Container</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href=".html">Contracts</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:WPKirk_WPBones_Contracts_Container" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="WPKirk/WPBones/Contracts/Container.html">Container</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:WPKirk_WPBones_Contracts_Container_Container" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="WPKirk/WPBones/Contracts/Container/Container.html">Container</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:WPKirk_WPBones_Contracts_Foundation" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="WPKirk/WPBones/Contracts/Foundation.html">Foundation</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:WPKirk_WPBones_Contracts_Foundation_Plugin" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="WPKirk/WPBones/Contracts/Foundation/Plugin.html">Plugin</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                            <li data-name="namespace:WPKirk_WPBones_Database" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="WPKirk/WPBones/Database.html">Database</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:WPKirk_WPBones_Database_Migrations" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="WPKirk/WPBones/Database/Migrations.html">Migrations</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:WPKirk_WPBones_Database_Migrations_Migration" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="WPKirk/WPBones/Database/Migrations/Migration.html">Migration</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:WPKirk_WPBones_Database_WordPressOption" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="WPKirk/WPBones/Database/WordPressOption.html">WordPressOption</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:WPKirk_WPBones_Foundation" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="WPKirk/WPBones/Foundation.html">Foundation</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:WPKirk_WPBones_Foundation_Console" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="WPKirk/WPBones/Foundation/Console.html">Console</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:WPKirk_WPBones_Foundation_Console_Kernel" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="WPKirk/WPBones/Foundation/Console/Kernel.html">Kernel</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:WPKirk_WPBones_Foundation_Http" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="WPKirk/WPBones/Foundation/Http.html">Http</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:WPKirk_WPBones_Foundation_Http_Request" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="WPKirk/WPBones/Foundation/Http/Request.html">Request</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:WPKirk_WPBones_Foundation_Plugin" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="WPKirk/WPBones/Foundation/Plugin.html">Plugin</a>                    </div>                </li>                            <li data-name="class:WPKirk_WPBones_Foundation_WordPressAjaxServiceProvider" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="WPKirk/WPBones/Foundation/WordPressAjaxServiceProvider.html">WordPressAjaxServiceProvider</a>                    </div>                </li>                            <li data-name="class:WPKirk_WPBones_Foundation_WordPressCustomPostTypeServiceProvider" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="WPKirk/WPBones/Foundation/WordPressCustomPostTypeServiceProvider.html">WordPressCustomPostTypeServiceProvider</a>                    </div>                </li>                            <li data-name="class:WPKirk_WPBones_Foundation_WordPressCustomTaxonomyTypeServiceProvider" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="WPKirk/WPBones/Foundation/WordPressCustomTaxonomyTypeServiceProvider.html">WordPressCustomTaxonomyTypeServiceProvider</a>                    </div>                </li>                            <li data-name="class:WPKirk_WPBones_Foundation_WordPressShortcodesServiceProvider" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="WPKirk/WPBones/Foundation/WordPressShortcodesServiceProvider.html">WordPressShortcodesServiceProvider</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:WPKirk_WPBones_Html" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="WPKirk/WPBones/Html.html">Html</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:WPKirk_WPBones_Html_Html" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="WPKirk/WPBones/Html/Html.html">Html</a>                    </div>                </li>                            <li data-name="class:WPKirk_WPBones_Html_HtmlTag" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="WPKirk/WPBones/Html/HtmlTag.html">HtmlTag</a>                    </div>                </li>                            <li data-name="class:WPKirk_WPBones_Html_HtmlTagA" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="WPKirk/WPBones/Html/HtmlTagA.html">HtmlTagA</a>                    </div>                </li>                            <li data-name="class:WPKirk_WPBones_Html_HtmlTagButton" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="WPKirk/WPBones/Html/HtmlTagButton.html">HtmlTagButton</a>                    </div>                </li>                            <li data-name="class:WPKirk_WPBones_Html_HtmlTagCheckbox" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="WPKirk/WPBones/Html/HtmlTagCheckbox.html">HtmlTagCheckbox</a>                    </div>                </li>                            <li data-name="class:WPKirk_WPBones_Html_HtmlTagDatetime" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="WPKirk/WPBones/Html/HtmlTagDatetime.html">HtmlTagDatetime</a>                    </div>                </li>                            <li data-name="class:WPKirk_WPBones_Html_HtmlTagFieldSet" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="WPKirk/WPBones/Html/HtmlTagFieldSet.html">HtmlTagFieldSet</a>                    </div>                </li>                            <li data-name="class:WPKirk_WPBones_Html_HtmlTagForm" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="WPKirk/WPBones/Html/HtmlTagForm.html">HtmlTagForm</a>                    </div>                </li>                            <li data-name="class:WPKirk_WPBones_Html_HtmlTagInput" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="WPKirk/WPBones/Html/HtmlTagInput.html">HtmlTagInput</a>                    </div>                </li>                            <li data-name="class:WPKirk_WPBones_Html_HtmlTagLabel" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="WPKirk/WPBones/Html/HtmlTagLabel.html">HtmlTagLabel</a>                    </div>                </li>                            <li data-name="class:WPKirk_WPBones_Html_HtmlTagOptGroup" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="WPKirk/WPBones/Html/HtmlTagOptGroup.html">HtmlTagOptGroup</a>                    </div>                </li>                            <li data-name="class:WPKirk_WPBones_Html_HtmlTagOption" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="WPKirk/WPBones/Html/HtmlTagOption.html">HtmlTagOption</a>                    </div>                </li>                            <li data-name="class:WPKirk_WPBones_Html_HtmlTagSelect" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="WPKirk/WPBones/Html/HtmlTagSelect.html">HtmlTagSelect</a>                    </div>                </li>                            <li data-name="class:WPKirk_WPBones_Html_HtmlTagTextArea" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="WPKirk/WPBones/Html/HtmlTagTextArea.html">HtmlTagTextArea</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:WPKirk_WPBones_Routing" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="WPKirk/WPBones/Routing.html">Routing</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:WPKirk_WPBones_Routing_Controller" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="WPKirk/WPBones/Routing/Controller.html">Controller</a>                    </div>                </li>                            <li data-name="class:WPKirk_WPBones_Routing_Route" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="WPKirk/WPBones/Routing/Route.html">Route</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:WPKirk_WPBones_Support" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="WPKirk/WPBones/Support.html">Support</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:WPKirk_WPBones_Support_ServiceProvider" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="WPKirk/WPBones/Support/ServiceProvider.html">ServiceProvider</a>                    </div>                </li>                            <li data-name="class:WPKirk_WPBones_Support_Str" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="WPKirk/WPBones/Support/Str.html">Str</a>                    </div>                </li>                            <li data-name="class:WPKirk_WPBones_Support_Widget" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="WPKirk/WPBones/Support/Widget.html">Widget</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:WPKirk_WPBones_View" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="WPKirk/WPBones/View.html">View</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:WPKirk_WPBones_View_View" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="WPKirk/WPBones/View/View.html">View</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "WPKirk.html", "name": "WPKirk", "doc": "Namespace WPKirk"},{"type": "Namespace", "link": "WPKirk/WPBones.html", "name": "WPKirk\\WPBones", "doc": "Namespace WPKirk\\WPBones"},{"type": "Namespace", "link": "WPKirk/WPBones/Console.html", "name": "WPKirk\\WPBones\\Console", "doc": "Namespace WPKirk\\WPBones\\Console"},{"type": "Namespace", "link": "WPKirk/WPBones/Container.html", "name": "WPKirk\\WPBones\\Container", "doc": "Namespace WPKirk\\WPBones\\Container"},{"type": "Namespace", "link": "WPKirk/WPBones/Contracts.html", "name": "WPKirk\\WPBones\\Contracts", "doc": "Namespace WPKirk\\WPBones\\Contracts"},{"type": "Namespace", "link": "WPKirk/WPBones/Contracts/Container.html", "name": "WPKirk\\WPBones\\Contracts\\Container", "doc": "Namespace WPKirk\\WPBones\\Contracts\\Container"},{"type": "Namespace", "link": "WPKirk/WPBones/Contracts/Foundation.html", "name": "WPKirk\\WPBones\\Contracts\\Foundation", "doc": "Namespace WPKirk\\WPBones\\Contracts\\Foundation"},{"type": "Namespace", "link": "WPKirk/WPBones/Database.html", "name": "WPKirk\\WPBones\\Database", "doc": "Namespace WPKirk\\WPBones\\Database"},{"type": "Namespace", "link": "WPKirk/WPBones/Database/Migrations.html", "name": "WPKirk\\WPBones\\Database\\Migrations", "doc": "Namespace WPKirk\\WPBones\\Database\\Migrations"},{"type": "Namespace", "link": "WPKirk/WPBones/Foundation.html", "name": "WPKirk\\WPBones\\Foundation", "doc": "Namespace WPKirk\\WPBones\\Foundation"},{"type": "Namespace", "link": "WPKirk/WPBones/Foundation/Console.html", "name": "WPKirk\\WPBones\\Foundation\\Console", "doc": "Namespace WPKirk\\WPBones\\Foundation\\Console"},{"type": "Namespace", "link": "WPKirk/WPBones/Foundation/Http.html", "name": "WPKirk\\WPBones\\Foundation\\Http", "doc": "Namespace WPKirk\\WPBones\\Foundation\\Http"},{"type": "Namespace", "link": "WPKirk/WPBones/Html.html", "name": "WPKirk\\WPBones\\Html", "doc": "Namespace WPKirk\\WPBones\\Html"},{"type": "Namespace", "link": "WPKirk/WPBones/Routing.html", "name": "WPKirk\\WPBones\\Routing", "doc": "Namespace WPKirk\\WPBones\\Routing"},{"type": "Namespace", "link": "WPKirk/WPBones/Support.html", "name": "WPKirk\\WPBones\\Support", "doc": "Namespace WPKirk\\WPBones\\Support"},{"type": "Namespace", "link": "WPKirk/WPBones/View.html", "name": "WPKirk\\WPBones\\View", "doc": "Namespace WPKirk\\WPBones\\View"},
            {"type": "Interface", "fromName": "WPKirk\\WPBones\\Contracts\\Container", "fromLink": "WPKirk/WPBones/Contracts/Container.html", "link": "WPKirk/WPBones/Contracts/Container/Container.html", "name": "WPKirk\\WPBones\\Contracts\\Container\\Container", "doc": "&quot;&quot;"},
                    
            {"type": "Interface", "fromName": "WPKirk\\WPBones\\Contracts\\Foundation", "fromLink": "WPKirk/WPBones/Contracts/Foundation.html", "link": "WPKirk/WPBones/Contracts/Foundation/Plugin.html", "name": "WPKirk\\WPBones\\Contracts\\Foundation\\Plugin", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "WPKirk\\WPBones\\Contracts\\Foundation\\Plugin", "fromLink": "WPKirk/WPBones/Contracts/Foundation/Plugin.html", "link": "WPKirk/WPBones/Contracts/Foundation/Plugin.html#method_getBasePath", "name": "WPKirk\\WPBones\\Contracts\\Foundation\\Plugin::getBasePath", "doc": "&quot;Get the base path of the Plugin installation.&quot;"},
            
            
            {"type": "Class", "fromName": "WPKirk\\WPBones\\Console", "fromLink": "WPKirk/WPBones/Console.html", "link": "WPKirk/WPBones/Console/Command.html", "name": "WPKirk\\WPBones\\Console\\Command", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "WPKirk\\WPBones\\Console\\Command", "fromLink": "WPKirk/WPBones/Console/Command.html", "link": "WPKirk/WPBones/Console/Command.html#method___construct", "name": "WPKirk\\WPBones\\Console\\Command::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Console\\Command", "fromLink": "WPKirk/WPBones/Console/Command.html", "link": "WPKirk/WPBones/Console/Command.html#method_options", "name": "WPKirk\\WPBones\\Console\\Command::options", "doc": "&quot;Return true if the options exists.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Console\\Command", "fromLink": "WPKirk/WPBones/Console/Command.html", "link": "WPKirk/WPBones/Console/Command.html#method_displayHelp", "name": "WPKirk\\WPBones\\Console\\Command::displayHelp", "doc": "&quot;Display the help well formatted.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Console\\Command", "fromLink": "WPKirk/WPBones/Console/Command.html", "link": "WPKirk/WPBones/Console/Command.html#method_getDescriptionAttribute", "name": "WPKirk\\WPBones\\Console\\Command::getDescriptionAttribute", "doc": "&quot;Return the description of command console.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Console\\Command", "fromLink": "WPKirk/WPBones/Console/Command.html", "link": "WPKirk/WPBones/Console/Command.html#method_setArgvAttribute", "name": "WPKirk\\WPBones\\Console\\Command::setArgvAttribute", "doc": "&quot;Set the argv.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Console\\Command", "fromLink": "WPKirk/WPBones/Console/Command.html", "link": "WPKirk/WPBones/Console/Command.html#method___get", "name": "WPKirk\\WPBones\\Console\\Command::__get", "doc": "&quot;Return the value of the method &lt;code&gt;get{Name}Attribute&lt;\/code&gt;.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Console\\Command", "fromLink": "WPKirk/WPBones/Console/Command.html", "link": "WPKirk/WPBones/Console/Command.html#method___set", "name": "WPKirk\\WPBones\\Console\\Command::__set", "doc": "&quot;Set the value of the method &lt;code&gt;set{Name}Attribute&lt;\/code&gt;.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Console\\Command", "fromLink": "WPKirk/WPBones/Console/Command.html", "link": "WPKirk/WPBones/Console/Command.html#method_handle", "name": "WPKirk\\WPBones\\Console\\Command::handle", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "WPKirk\\WPBones\\Container", "fromLink": "WPKirk/WPBones/Container.html", "link": "WPKirk/WPBones/Container/Container.html", "name": "WPKirk\\WPBones\\Container\\Container", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "WPKirk\\WPBones\\Contracts\\Container", "fromLink": "WPKirk/WPBones/Contracts/Container.html", "link": "WPKirk/WPBones/Contracts/Container/Container.html", "name": "WPKirk\\WPBones\\Contracts\\Container\\Container", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "WPKirk\\WPBones\\Contracts\\Foundation", "fromLink": "WPKirk/WPBones/Contracts/Foundation.html", "link": "WPKirk/WPBones/Contracts/Foundation/Plugin.html", "name": "WPKirk\\WPBones\\Contracts\\Foundation\\Plugin", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "WPKirk\\WPBones\\Contracts\\Foundation\\Plugin", "fromLink": "WPKirk/WPBones/Contracts/Foundation/Plugin.html", "link": "WPKirk/WPBones/Contracts/Foundation/Plugin.html#method_getBasePath", "name": "WPKirk\\WPBones\\Contracts\\Foundation\\Plugin::getBasePath", "doc": "&quot;Get the base path of the Plugin installation.&quot;"},
            
            {"type": "Class", "fromName": "WPKirk\\WPBones\\Database\\Migrations", "fromLink": "WPKirk/WPBones/Database/Migrations.html", "link": "WPKirk/WPBones/Database/Migrations/Migration.html", "name": "WPKirk\\WPBones\\Database\\Migrations\\Migration", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "WPKirk\\WPBones\\Database\\Migrations\\Migration", "fromLink": "WPKirk/WPBones/Database/Migrations/Migration.html", "link": "WPKirk/WPBones/Database/Migrations/Migration.html#method___construct", "name": "WPKirk\\WPBones\\Database\\Migrations\\Migration::__construct", "doc": "&quot;Create a new Migration.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Database\\Migrations\\Migration", "fromLink": "WPKirk/WPBones/Database/Migrations/Migration.html", "link": "WPKirk/WPBones/Database/Migrations/Migration.html#method_up", "name": "WPKirk\\WPBones\\Database\\Migrations\\Migration::up", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Database\\Migrations\\Migration", "fromLink": "WPKirk/WPBones/Database/Migrations/Migration.html", "link": "WPKirk/WPBones/Database/Migrations/Migration.html#method_down", "name": "WPKirk\\WPBones\\Database\\Migrations\\Migration::down", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "WPKirk\\WPBones\\Database", "fromLink": "WPKirk/WPBones/Database.html", "link": "WPKirk/WPBones/Database/WordPressOption.html", "name": "WPKirk\\WPBones\\Database\\WordPressOption", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "WPKirk\\WPBones\\Database\\WordPressOption", "fromLink": "WPKirk/WPBones/Database/WordPressOption.html", "link": "WPKirk/WPBones/Database/WordPressOption.html#method___construct", "name": "WPKirk\\WPBones\\Database\\WordPressOption::__construct", "doc": "&quot;Create a new WordPressOption.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Database\\WordPressOption", "fromLink": "WPKirk/WPBones/Database/WordPressOption.html", "link": "WPKirk/WPBones/Database/WordPressOption.html#method___toString", "name": "WPKirk\\WPBones\\Database\\WordPressOption::__toString", "doc": "&quot;Get the string representation (json) of the options.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Database\\WordPressOption", "fromLink": "WPKirk/WPBones/Database/WordPressOption.html", "link": "WPKirk/WPBones/Database/WordPressOption.html#method_get", "name": "WPKirk\\WPBones\\Database\\WordPressOption::get", "doc": "&quot;Return a branch\/single option by path.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Database\\WordPressOption", "fromLink": "WPKirk/WPBones/Database/WordPressOption.html", "link": "WPKirk/WPBones/Database/WordPressOption.html#method_set", "name": "WPKirk\\WPBones\\Database\\WordPressOption::set", "doc": "&quot;Set (or remove) a branch\/single option by path.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Database\\WordPressOption", "fromLink": "WPKirk/WPBones/Database/WordPressOption.html", "link": "WPKirk/WPBones/Database/WordPressOption.html#method_delete", "name": "WPKirk\\WPBones\\Database\\WordPressOption::delete", "doc": "&quot;Delete a branch\/single option by path.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Database\\WordPressOption", "fromLink": "WPKirk/WPBones/Database/WordPressOption.html", "link": "WPKirk/WPBones/Database/WordPressOption.html#method_update", "name": "WPKirk\\WPBones\\Database\\WordPressOption::update", "doc": "&quot;Update a branch of options.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Database\\WordPressOption", "fromLink": "WPKirk/WPBones/Database/WordPressOption.html", "link": "WPKirk/WPBones/Database/WordPressOption.html#method_delta", "name": "WPKirk\\WPBones\\Database\\WordPressOption::delta", "doc": "&quot;Execute a delta from the current version of the options and the previous version stored in the database.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Database\\WordPressOption", "fromLink": "WPKirk/WPBones/Database/WordPressOption.html", "link": "WPKirk/WPBones/Database/WordPressOption.html#method_reset", "name": "WPKirk\\WPBones\\Database\\WordPressOption::reset", "doc": "&quot;Load the default value from &lt;code&gt;config\/options.php&lt;\/code&gt; and replace the current.&quot;"},
            
            {"type": "Class", "fromName": "WPKirk\\WPBones\\Foundation\\Console", "fromLink": "WPKirk/WPBones/Foundation/Console.html", "link": "WPKirk/WPBones/Foundation/Console/Kernel.html", "name": "WPKirk\\WPBones\\Foundation\\Console\\Kernel", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Console\\Kernel", "fromLink": "WPKirk/WPBones/Foundation/Console/Kernel.html", "link": "WPKirk/WPBones/Foundation/Console/Kernel.html#method___construct", "name": "WPKirk\\WPBones\\Foundation\\Console\\Kernel::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Console\\Kernel", "fromLink": "WPKirk/WPBones/Foundation/Console/Kernel.html", "link": "WPKirk/WPBones/Foundation/Console/Kernel.html#method_hasCommands", "name": "WPKirk\\WPBones\\Foundation\\Console\\Kernel::hasCommands", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Console\\Kernel", "fromLink": "WPKirk/WPBones/Foundation/Console/Kernel.html", "link": "WPKirk/WPBones/Foundation/Console/Kernel.html#method_displayHelp", "name": "WPKirk\\WPBones\\Foundation\\Console\\Kernel::displayHelp", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Console\\Kernel", "fromLink": "WPKirk/WPBones/Foundation/Console/Kernel.html", "link": "WPKirk/WPBones/Foundation/Console/Kernel.html#method_handle", "name": "WPKirk\\WPBones\\Foundation\\Console\\Kernel::handle", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "WPKirk\\WPBones\\Foundation\\Http", "fromLink": "WPKirk/WPBones/Foundation/Http.html", "link": "WPKirk/WPBones/Foundation/Http/Request.html", "name": "WPKirk\\WPBones\\Foundation\\Http\\Request", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Http\\Request", "fromLink": "WPKirk/WPBones/Foundation/Http/Request.html", "link": "WPKirk/WPBones/Foundation/Http/Request.html#method___construct", "name": "WPKirk\\WPBones\\Foundation\\Http\\Request::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Http\\Request", "fromLink": "WPKirk/WPBones/Foundation/Http/Request.html", "link": "WPKirk/WPBones/Foundation/Http/Request.html#method___get", "name": "WPKirk\\WPBones\\Foundation\\Http\\Request::__get", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Http\\Request", "fromLink": "WPKirk/WPBones/Foundation/Http/Request.html", "link": "WPKirk/WPBones/Foundation/Http/Request.html#method_getMethodAttribute", "name": "WPKirk\\WPBones\\Foundation\\Http\\Request::getMethodAttribute", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Http\\Request", "fromLink": "WPKirk/WPBones/Foundation/Http/Request.html", "link": "WPKirk/WPBones/Foundation/Http/Request.html#method_verifyNonce", "name": "WPKirk\\WPBones\\Foundation\\Http\\Request::verifyNonce", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Http\\Request", "fromLink": "WPKirk/WPBones/Foundation/Http/Request.html", "link": "WPKirk/WPBones/Foundation/Http/Request.html#method_get", "name": "WPKirk\\WPBones\\Foundation\\Http\\Request::get", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Http\\Request", "fromLink": "WPKirk/WPBones/Foundation/Http/Request.html", "link": "WPKirk/WPBones/Foundation/Http/Request.html#method_getAsOptions", "name": "WPKirk\\WPBones\\Foundation\\Http\\Request::getAsOptions", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Http\\Request", "fromLink": "WPKirk/WPBones/Foundation/Http/Request.html", "link": "WPKirk/WPBones/Foundation/Http/Request.html#method_getIsAjaxAttribute", "name": "WPKirk\\WPBones\\Foundation\\Http\\Request::getIsAjaxAttribute", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Http\\Request", "fromLink": "WPKirk/WPBones/Foundation/Http/Request.html", "link": "WPKirk/WPBones/Foundation/Http/Request.html#method_isVerb", "name": "WPKirk\\WPBones\\Foundation\\Http\\Request::isVerb", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "WPKirk\\WPBones\\Foundation", "fromLink": "WPKirk/WPBones/Foundation.html", "link": "WPKirk/WPBones/Foundation/Plugin.html", "name": "WPKirk\\WPBones\\Foundation\\Plugin", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Plugin", "fromLink": "WPKirk/WPBones/Foundation/Plugin.html", "link": "WPKirk/WPBones/Foundation/Plugin.html#method___construct", "name": "WPKirk\\WPBones\\Foundation\\Plugin::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Plugin", "fromLink": "WPKirk/WPBones/Foundation/Plugin.html", "link": "WPKirk/WPBones/Foundation/Plugin.html#method___get", "name": "WPKirk\\WPBones\\Foundation\\Plugin::__get", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Plugin", "fromLink": "WPKirk/WPBones/Foundation/Plugin.html", "link": "WPKirk/WPBones/Foundation/Plugin.html#method_boot", "name": "WPKirk\\WPBones\\Foundation\\Plugin::boot", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Plugin", "fromLink": "WPKirk/WPBones/Foundation/Plugin.html", "link": "WPKirk/WPBones/Foundation/Plugin.html#method_set_screen_option", "name": "WPKirk\\WPBones\\Foundation\\Plugin::set_screen_option", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Plugin", "fromLink": "WPKirk/WPBones/Foundation/Plugin.html", "link": "WPKirk/WPBones/Foundation/Plugin.html#method_getOptionsAttribute", "name": "WPKirk\\WPBones\\Foundation\\Plugin::getOptionsAttribute", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Plugin", "fromLink": "WPKirk/WPBones/Foundation/Plugin.html", "link": "WPKirk/WPBones/Foundation/Plugin.html#method_getRequestAttribute", "name": "WPKirk\\WPBones\\Foundation\\Plugin::getRequestAttribute", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Plugin", "fromLink": "WPKirk/WPBones/Foundation/Plugin.html", "link": "WPKirk/WPBones/Foundation/Plugin.html#method_getPluginBasenameAttribute", "name": "WPKirk\\WPBones\\Foundation\\Plugin::getPluginBasenameAttribute", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Plugin", "fromLink": "WPKirk/WPBones/Foundation/Plugin.html", "link": "WPKirk/WPBones/Foundation/Plugin.html#method_getBasePath", "name": "WPKirk\\WPBones\\Foundation\\Plugin::getBasePath", "doc": "&quot;Get the base path of the Plugin installation.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Plugin", "fromLink": "WPKirk/WPBones/Foundation/Plugin.html", "link": "WPKirk/WPBones/Foundation/Plugin.html#method_getBaseUri", "name": "WPKirk\\WPBones\\Foundation\\Plugin::getBaseUri", "doc": "&quot;Return the absolute URL for the installation plugin.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Plugin", "fromLink": "WPKirk/WPBones/Foundation/Plugin.html", "link": "WPKirk/WPBones/Foundation/Plugin.html#method_getCssAttribute", "name": "WPKirk\\WPBones\\Foundation\\Plugin::getCssAttribute", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Plugin", "fromLink": "WPKirk/WPBones/Foundation/Plugin.html", "link": "WPKirk/WPBones/Foundation/Plugin.html#method_getJsAttribute", "name": "WPKirk\\WPBones\\Foundation\\Plugin::getJsAttribute", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Plugin", "fromLink": "WPKirk/WPBones/Foundation/Plugin.html", "link": "WPKirk/WPBones/Foundation/Plugin.html#method_getImagesAttribute", "name": "WPKirk\\WPBones\\Foundation\\Plugin::getImagesAttribute", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Plugin", "fromLink": "WPKirk/WPBones/Foundation/Plugin.html", "link": "WPKirk/WPBones/Foundation/Plugin.html#method_vendor", "name": "WPKirk\\WPBones\\Foundation\\Plugin::vendor", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Plugin", "fromLink": "WPKirk/WPBones/Foundation/Plugin.html", "link": "WPKirk/WPBones/Foundation/Plugin.html#method_getPublicImagesUri", "name": "WPKirk\\WPBones\\Foundation\\Plugin::getPublicImagesUri", "doc": "&quot;Return the absolute URL for the public images.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Plugin", "fromLink": "WPKirk/WPBones/Foundation/Plugin.html", "link": "WPKirk/WPBones/Foundation/Plugin.html#method_getPublicCssUri", "name": "WPKirk\\WPBones\\Foundation\\Plugin::getPublicCssUri", "doc": "&quot;Return the absolute URL for the public images.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Plugin", "fromLink": "WPKirk/WPBones/Foundation/Plugin.html", "link": "WPKirk/WPBones/Foundation/Plugin.html#method_getPublicJsUri", "name": "WPKirk\\WPBones\\Foundation\\Plugin::getPublicJsUri", "doc": "&quot;Return the absolute URL for the public scripts.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Plugin", "fromLink": "WPKirk/WPBones/Foundation/Plugin.html", "link": "WPKirk/WPBones/Foundation/Plugin.html#method_config", "name": "WPKirk\\WPBones\\Foundation\\Plugin::config", "doc": "&quot;Get \/ set the specified configuration value.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Plugin", "fromLink": "WPKirk/WPBones/Foundation/Plugin.html", "link": "WPKirk/WPBones/Foundation/Plugin.html#method_env", "name": "WPKirk\\WPBones\\Foundation\\Plugin::env", "doc": "&quot;Gets the value of an environment variable. Supports boolean, empty and null.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Plugin", "fromLink": "WPKirk/WPBones/Foundation/Plugin.html", "link": "WPKirk/WPBones/Foundation/Plugin.html#method_view", "name": "WPKirk\\WPBones\\Foundation\\Plugin::view", "doc": "&quot;Return an instance of View\/Contract.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Plugin", "fromLink": "WPKirk/WPBones/Foundation/Plugin.html", "link": "WPKirk/WPBones/Foundation/Plugin.html#method_isAjax", "name": "WPKirk\\WPBones\\Foundation\\Plugin::isAjax", "doc": "&quot;Return TRUE if an Ajax called&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Plugin", "fromLink": "WPKirk/WPBones/Foundation/Plugin.html", "link": "WPKirk/WPBones/Foundation/Plugin.html#method_getPageUrl", "name": "WPKirk\\WPBones\\Foundation\\Plugin::getPageUrl", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Plugin", "fromLink": "WPKirk/WPBones/Foundation/Plugin.html", "link": "WPKirk/WPBones/Foundation/Plugin.html#method_provider", "name": "WPKirk\\WPBones\\Foundation\\Plugin::provider", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Plugin", "fromLink": "WPKirk/WPBones/Foundation/Plugin.html", "link": "WPKirk/WPBones/Foundation/Plugin.html#method_activation", "name": "WPKirk\\WPBones\\Foundation\\Plugin::activation", "doc": "&quot;Called when a plugin is activate; &lt;code&gt;register_activation_hook()&lt;\/code&gt;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Plugin", "fromLink": "WPKirk/WPBones/Foundation/Plugin.html", "link": "WPKirk/WPBones/Foundation/Plugin.html#method_deactivation", "name": "WPKirk\\WPBones\\Foundation\\Plugin::deactivation", "doc": "&quot;Called when a plugin is deactivate; &lt;code&gt;register_deactivation_hook()&lt;\/code&gt;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Plugin", "fromLink": "WPKirk/WPBones/Foundation/Plugin.html", "link": "WPKirk/WPBones/Foundation/Plugin.html#method_init", "name": "WPKirk\\WPBones\\Foundation\\Plugin::init", "doc": "&quot;Fires after WordPress has finished loading but before any headers are sent.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Plugin", "fromLink": "WPKirk/WPBones/Foundation/Plugin.html", "link": "WPKirk/WPBones/Foundation/Plugin.html#method_admin_menu", "name": "WPKirk\\WPBones\\Foundation\\Plugin::admin_menu", "doc": "&quot;Fires before the administration menu loads in the admin.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\Plugin", "fromLink": "WPKirk/WPBones/Foundation/Plugin.html", "link": "WPKirk/WPBones/Foundation/Plugin.html#method_widgets_init", "name": "WPKirk\\WPBones\\Foundation\\Plugin::widgets_init", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "WPKirk\\WPBones\\Foundation", "fromLink": "WPKirk/WPBones/Foundation.html", "link": "WPKirk/WPBones/Foundation/WordPressAjaxServiceProvider.html", "name": "WPKirk\\WPBones\\Foundation\\WordPressAjaxServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\WordPressAjaxServiceProvider", "fromLink": "WPKirk/WPBones/Foundation/WordPressAjaxServiceProvider.html", "link": "WPKirk/WPBones/Foundation/WordPressAjaxServiceProvider.html#method_register", "name": "WPKirk\\WPBones\\Foundation\\WordPressAjaxServiceProvider::register", "doc": "&quot;Init the registred Ajax cactions.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\WordPressAjaxServiceProvider", "fromLink": "WPKirk/WPBones/Foundation/WordPressAjaxServiceProvider.html", "link": "WPKirk/WPBones/Foundation/WordPressAjaxServiceProvider.html#method_boot", "name": "WPKirk\\WPBones\\Foundation\\WordPressAjaxServiceProvider::boot", "doc": "&quot;You may override this method in order to register your own actions and filters.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\WordPressAjaxServiceProvider", "fromLink": "WPKirk/WPBones/Foundation/WordPressAjaxServiceProvider.html", "link": "WPKirk/WPBones/Foundation/WordPressAjaxServiceProvider.html#method_getRequestAttribute", "name": "WPKirk\\WPBones\\Foundation\\WordPressAjaxServiceProvider::getRequestAttribute", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\WordPressAjaxServiceProvider", "fromLink": "WPKirk/WPBones/Foundation/WordPressAjaxServiceProvider.html", "link": "WPKirk/WPBones/Foundation/WordPressAjaxServiceProvider.html#method___get", "name": "WPKirk\\WPBones\\Foundation\\WordPressAjaxServiceProvider::__get", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "WPKirk\\WPBones\\Foundation", "fromLink": "WPKirk/WPBones/Foundation.html", "link": "WPKirk/WPBones/Foundation/WordPressCustomPostTypeServiceProvider.html", "name": "WPKirk\\WPBones\\Foundation\\WordPressCustomPostTypeServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\WordPressCustomPostTypeServiceProvider", "fromLink": "WPKirk/WPBones/Foundation/WordPressCustomPostTypeServiceProvider.html", "link": "WPKirk/WPBones/Foundation/WordPressCustomPostTypeServiceProvider.html#method_register", "name": "WPKirk\\WPBones\\Foundation\\WordPressCustomPostTypeServiceProvider::register", "doc": "&quot;Register the service provider.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\WordPressCustomPostTypeServiceProvider", "fromLink": "WPKirk/WPBones/Foundation/WordPressCustomPostTypeServiceProvider.html", "link": "WPKirk/WPBones/Foundation/WordPressCustomPostTypeServiceProvider.html#method_boot", "name": "WPKirk\\WPBones\\Foundation\\WordPressCustomPostTypeServiceProvider::boot", "doc": "&quot;You may override this method in order to register your own actions and filters.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\WordPressCustomPostTypeServiceProvider", "fromLink": "WPKirk/WPBones/Foundation/WordPressCustomPostTypeServiceProvider.html", "link": "WPKirk/WPBones/Foundation/WordPressCustomPostTypeServiceProvider.html#method_is", "name": "WPKirk\\WPBones\\Foundation\\WordPressCustomPostTypeServiceProvider::is", "doc": "&quot;Return TRUE if this custom post type is current view.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\WordPressCustomPostTypeServiceProvider", "fromLink": "WPKirk/WPBones/Foundation/WordPressCustomPostTypeServiceProvider.html", "link": "WPKirk/WPBones/Foundation/WordPressCustomPostTypeServiceProvider.html#method_save_post", "name": "WPKirk\\WPBones\\Foundation\\WordPressCustomPostTypeServiceProvider::save_post", "doc": "&quot;This action is called when a post is save or updated. Use the &lt;code&gt;save_post_{post_type}&lt;\/code&gt; hook&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\WordPressCustomPostTypeServiceProvider", "fromLink": "WPKirk/WPBones/Foundation/WordPressCustomPostTypeServiceProvider.html", "link": "WPKirk/WPBones/Foundation/WordPressCustomPostTypeServiceProvider.html#method_update", "name": "WPKirk\\WPBones\\Foundation\\WordPressCustomPostTypeServiceProvider::update", "doc": "&quot;Override this method to save\/update your custom data.&quot;"},
            
            {"type": "Class", "fromName": "WPKirk\\WPBones\\Foundation", "fromLink": "WPKirk/WPBones/Foundation.html", "link": "WPKirk/WPBones/Foundation/WordPressCustomTaxonomyTypeServiceProvider.html", "name": "WPKirk\\WPBones\\Foundation\\WordPressCustomTaxonomyTypeServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\WordPressCustomTaxonomyTypeServiceProvider", "fromLink": "WPKirk/WPBones/Foundation/WordPressCustomTaxonomyTypeServiceProvider.html", "link": "WPKirk/WPBones/Foundation/WordPressCustomTaxonomyTypeServiceProvider.html#method_register", "name": "WPKirk\\WPBones\\Foundation\\WordPressCustomTaxonomyTypeServiceProvider::register", "doc": "&quot;Register the service provider.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\WordPressCustomTaxonomyTypeServiceProvider", "fromLink": "WPKirk/WPBones/Foundation/WordPressCustomTaxonomyTypeServiceProvider.html", "link": "WPKirk/WPBones/Foundation/WordPressCustomTaxonomyTypeServiceProvider.html#method_boot", "name": "WPKirk\\WPBones\\Foundation\\WordPressCustomTaxonomyTypeServiceProvider::boot", "doc": "&quot;You may override this method in order to register your own actions and filters.&quot;"},
            
            {"type": "Class", "fromName": "WPKirk\\WPBones\\Foundation", "fromLink": "WPKirk/WPBones/Foundation.html", "link": "WPKirk/WPBones/Foundation/WordPressShortcodesServiceProvider.html", "name": "WPKirk\\WPBones\\Foundation\\WordPressShortcodesServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\WordPressShortcodesServiceProvider", "fromLink": "WPKirk/WPBones/Foundation/WordPressShortcodesServiceProvider.html", "link": "WPKirk/WPBones/Foundation/WordPressShortcodesServiceProvider.html#method_register", "name": "WPKirk\\WPBones\\Foundation\\WordPressShortcodesServiceProvider::register", "doc": "&quot;Init the registred shortcodes.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Foundation\\WordPressShortcodesServiceProvider", "fromLink": "WPKirk/WPBones/Foundation/WordPressShortcodesServiceProvider.html", "link": "WPKirk/WPBones/Foundation/WordPressShortcodesServiceProvider.html#method_boot", "name": "WPKirk\\WPBones\\Foundation\\WordPressShortcodesServiceProvider::boot", "doc": "&quot;You may override this method in order to register your own actions and filters.&quot;"},
            
            {"type": "Class", "fromName": "WPKirk\\WPBones\\Html", "fromLink": "WPKirk/WPBones/Html.html", "link": "WPKirk/WPBones/Html/Html.html", "name": "WPKirk\\WPBones\\Html\\Html", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "WPKirk\\WPBones\\Html\\Html", "fromLink": "WPKirk/WPBones/Html/Html.html", "link": "WPKirk/WPBones/Html/Html.html#method___callStatic", "name": "WPKirk\\WPBones\\Html\\Html::__callStatic", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "WPKirk\\WPBones\\Html", "fromLink": "WPKirk/WPBones/Html.html", "link": "WPKirk/WPBones/Html/HtmlTag.html", "name": "WPKirk\\WPBones\\Html\\HtmlTag", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "WPKirk\\WPBones\\Html\\HtmlTag", "fromLink": "WPKirk/WPBones/Html/HtmlTag.html", "link": "WPKirk/WPBones/Html/HtmlTag.html#method_attributes", "name": "WPKirk\\WPBones\\Html\\HtmlTag::attributes", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Html\\HtmlTag", "fromLink": "WPKirk/WPBones/Html/HtmlTag.html", "link": "WPKirk/WPBones/Html/HtmlTag.html#method_style", "name": "WPKirk\\WPBones\\Html\\HtmlTag::style", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Html\\HtmlTag", "fromLink": "WPKirk/WPBones/Html/HtmlTag.html", "link": "WPKirk/WPBones/Html/HtmlTag.html#method_data", "name": "WPKirk\\WPBones\\Html\\HtmlTag::data", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Html\\HtmlTag", "fromLink": "WPKirk/WPBones/Html/HtmlTag.html", "link": "WPKirk/WPBones/Html/HtmlTag.html#method_getDataAttribute", "name": "WPKirk\\WPBones\\Html\\HtmlTag::getDataAttribute", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Html\\HtmlTag", "fromLink": "WPKirk/WPBones/Html/HtmlTag.html", "link": "WPKirk/WPBones/Html/HtmlTag.html#method___construct", "name": "WPKirk\\WPBones\\Html\\HtmlTag::__construct", "doc": "&quot;HtmlTag constructor.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Html\\HtmlTag", "fromLink": "WPKirk/WPBones/Html/HtmlTag.html", "link": "WPKirk/WPBones/Html/HtmlTag.html#method___get", "name": "WPKirk\\WPBones\\Html\\HtmlTag::__get", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Html\\HtmlTag", "fromLink": "WPKirk/WPBones/Html/HtmlTag.html", "link": "WPKirk/WPBones/Html/HtmlTag.html#method___set", "name": "WPKirk\\WPBones\\Html\\HtmlTag::__set", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Html\\HtmlTag", "fromLink": "WPKirk/WPBones/Html/HtmlTag.html", "link": "WPKirk/WPBones/Html/HtmlTag.html#method___toString", "name": "WPKirk\\WPBones\\Html\\HtmlTag::__toString", "doc": "&quot;Get the string rappresentation of the tag.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Html\\HtmlTag", "fromLink": "WPKirk/WPBones/Html/HtmlTag.html", "link": "WPKirk/WPBones/Html/HtmlTag.html#method___call", "name": "WPKirk\\WPBones\\Html\\HtmlTag::__call", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Html\\HtmlTag", "fromLink": "WPKirk/WPBones/Html/HtmlTag.html", "link": "WPKirk/WPBones/Html/HtmlTag.html#method_html", "name": "WPKirk\\WPBones\\Html\\HtmlTag::html", "doc": "&quot;Get the HTML output.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Html\\HtmlTag", "fromLink": "WPKirk/WPBones/Html/HtmlTag.html", "link": "WPKirk/WPBones/Html/HtmlTag.html#method_render", "name": "WPKirk\\WPBones\\Html\\HtmlTag::render", "doc": "&quot;Display the HTML output.&quot;"},
            
            {"type": "Class", "fromName": "WPKirk\\WPBones\\Html", "fromLink": "WPKirk/WPBones/Html.html", "link": "WPKirk/WPBones/Html/HtmlTagA.html", "name": "WPKirk\\WPBones\\Html\\HtmlTagA", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "WPKirk\\WPBones\\Html", "fromLink": "WPKirk/WPBones/Html.html", "link": "WPKirk/WPBones/Html/HtmlTagButton.html", "name": "WPKirk\\WPBones\\Html\\HtmlTagButton", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "WPKirk\\WPBones\\Html", "fromLink": "WPKirk/WPBones/Html.html", "link": "WPKirk/WPBones/Html/HtmlTagCheckbox.html", "name": "WPKirk\\WPBones\\Html\\HtmlTagCheckbox", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "WPKirk\\WPBones\\Html\\HtmlTagCheckbox", "fromLink": "WPKirk/WPBones/Html/HtmlTagCheckbox.html", "link": "WPKirk/WPBones/Html/HtmlTagCheckbox.html#method_checked", "name": "WPKirk\\WPBones\\Html\\HtmlTagCheckbox::checked", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "WPKirk\\WPBones\\Html", "fromLink": "WPKirk/WPBones/Html.html", "link": "WPKirk/WPBones/Html/HtmlTagDatetime.html", "name": "WPKirk\\WPBones\\Html\\HtmlTagDatetime", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "WPKirk\\WPBones\\Html\\HtmlTagDatetime", "fromLink": "WPKirk/WPBones/Html/HtmlTagDatetime.html", "link": "WPKirk/WPBones/Html/HtmlTagDatetime.html#method_html", "name": "WPKirk\\WPBones\\Html\\HtmlTagDatetime::html", "doc": "&quot;Get the HTML output.&quot;"},
            
            {"type": "Class", "fromName": "WPKirk\\WPBones\\Html", "fromLink": "WPKirk/WPBones/Html.html", "link": "WPKirk/WPBones/Html/HtmlTagFieldSet.html", "name": "WPKirk\\WPBones\\Html\\HtmlTagFieldSet", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "WPKirk\\WPBones\\Html", "fromLink": "WPKirk/WPBones/Html.html", "link": "WPKirk/WPBones/Html/HtmlTagForm.html", "name": "WPKirk\\WPBones\\Html\\HtmlTagForm", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "WPKirk\\WPBones\\Html", "fromLink": "WPKirk/WPBones/Html.html", "link": "WPKirk/WPBones/Html/HtmlTagInput.html", "name": "WPKirk\\WPBones\\Html\\HtmlTagInput", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "WPKirk\\WPBones\\Html", "fromLink": "WPKirk/WPBones/Html.html", "link": "WPKirk/WPBones/Html/HtmlTagLabel.html", "name": "WPKirk\\WPBones\\Html\\HtmlTagLabel", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "WPKirk\\WPBones\\Html", "fromLink": "WPKirk/WPBones/Html.html", "link": "WPKirk/WPBones/Html/HtmlTagOptGroup.html", "name": "WPKirk\\WPBones\\Html\\HtmlTagOptGroup", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "WPKirk\\WPBones\\Html", "fromLink": "WPKirk/WPBones/Html.html", "link": "WPKirk/WPBones/Html/HtmlTagOption.html", "name": "WPKirk\\WPBones\\Html\\HtmlTagOption", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "WPKirk\\WPBones\\Html", "fromLink": "WPKirk/WPBones/Html.html", "link": "WPKirk/WPBones/Html/HtmlTagSelect.html", "name": "WPKirk\\WPBones\\Html\\HtmlTagSelect", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "WPKirk\\WPBones\\Html\\HtmlTagSelect", "fromLink": "WPKirk/WPBones/Html/HtmlTagSelect.html", "link": "WPKirk/WPBones/Html/HtmlTagSelect.html#method_options", "name": "WPKirk\\WPBones\\Html\\HtmlTagSelect::options", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "WPKirk\\WPBones\\Html", "fromLink": "WPKirk/WPBones/Html.html", "link": "WPKirk/WPBones/Html/HtmlTagTextArea.html", "name": "WPKirk\\WPBones\\Html\\HtmlTagTextArea", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "WPKirk\\WPBones\\Routing", "fromLink": "WPKirk/WPBones/Routing.html", "link": "WPKirk/WPBones/Routing/Controller.html", "name": "WPKirk\\WPBones\\Routing\\Controller", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "WPKirk\\WPBones\\Routing\\Controller", "fromLink": "WPKirk/WPBones/Routing/Controller.html", "link": "WPKirk/WPBones/Routing/Controller.html#method_load", "name": "WPKirk\\WPBones\\Routing\\Controller::load", "doc": "&quot;Ths method is executed by add_action( &#039;load-{}&#039; )&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Routing\\Controller", "fromLink": "WPKirk/WPBones/Routing/Controller.html", "link": "WPKirk/WPBones/Routing/Controller.html#method___get", "name": "WPKirk\\WPBones\\Routing\\Controller::__get", "doc": "&quot;Get a method\/attribute if exists.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Routing\\Controller", "fromLink": "WPKirk/WPBones/Routing/Controller.html", "link": "WPKirk/WPBones/Routing/Controller.html#method_redirect", "name": "WPKirk\\WPBones\\Routing\\Controller::redirect", "doc": "&quot;Redirect the browser to a localtion. If the header has been sent, then a Javascript and meta refresh will\ninserted into the page.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Routing\\Controller", "fromLink": "WPKirk/WPBones/Routing/Controller.html", "link": "WPKirk/WPBones/Routing/Controller.html#method_render", "name": "WPKirk\\WPBones\\Routing\\Controller::render", "doc": "&quot;Used to display a view from a menu. The method is usually &lt;code&gt;index&lt;\/code&gt; or &lt;code&gt;store&lt;\/code&gt;. These can return a view instance.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Routing\\Controller", "fromLink": "WPKirk/WPBones/Routing/Controller.html", "link": "WPKirk/WPBones/Routing/Controller.html#method_getRequestAttribute", "name": "WPKirk\\WPBones\\Routing\\Controller::getRequestAttribute", "doc": "&quot;Get the Request instance.&quot;"},
            
            {"type": "Class", "fromName": "WPKirk\\WPBones\\Routing", "fromLink": "WPKirk/WPBones/Routing.html", "link": "WPKirk/WPBones/Routing/Route.html", "name": "WPKirk\\WPBones\\Routing\\Route", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "WPKirk\\WPBones\\Routing\\Route", "fromLink": "WPKirk/WPBones/Routing/Route.html", "link": "WPKirk/WPBones/Routing/Route.html#method_get", "name": "WPKirk\\WPBones\\Routing\\Route::get", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "WPKirk\\WPBones\\Support", "fromLink": "WPKirk/WPBones/Support.html", "link": "WPKirk/WPBones/Support/ServiceProvider.html", "name": "WPKirk\\WPBones\\Support\\ServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "WPKirk\\WPBones\\Support\\ServiceProvider", "fromLink": "WPKirk/WPBones/Support/ServiceProvider.html", "link": "WPKirk/WPBones/Support/ServiceProvider.html#method_register", "name": "WPKirk\\WPBones\\Support\\ServiceProvider::register", "doc": "&quot;Register the service provider.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Support\\ServiceProvider", "fromLink": "WPKirk/WPBones/Support/ServiceProvider.html", "link": "WPKirk/WPBones/Support/ServiceProvider.html#method___call", "name": "WPKirk\\WPBones\\Support\\ServiceProvider::__call", "doc": "&quot;Dynamically handle missing method calls.&quot;"},
            
            {"type": "Class", "fromName": "WPKirk\\WPBones\\Support", "fromLink": "WPKirk/WPBones/Support.html", "link": "WPKirk/WPBones/Support/Str.html", "name": "WPKirk\\WPBones\\Support\\Str", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "WPKirk\\WPBones\\Support\\Str", "fromLink": "WPKirk/WPBones/Support/Str.html", "link": "WPKirk/WPBones/Support/Str.html#method_ascii", "name": "WPKirk\\WPBones\\Support\\Str::ascii", "doc": "&quot;Transliterate a UTF-8 value to ASCII.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Support\\Str", "fromLink": "WPKirk/WPBones/Support/Str.html", "link": "WPKirk/WPBones/Support/Str.html#method_camel", "name": "WPKirk\\WPBones\\Support\\Str::camel", "doc": "&quot;Convert a value to camel case.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Support\\Str", "fromLink": "WPKirk/WPBones/Support/Str.html", "link": "WPKirk/WPBones/Support/Str.html#method_contains", "name": "WPKirk\\WPBones\\Support\\Str::contains", "doc": "&quot;Determine if a given string contains a given substring.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Support\\Str", "fromLink": "WPKirk/WPBones/Support/Str.html", "link": "WPKirk/WPBones/Support/Str.html#method_endsWith", "name": "WPKirk\\WPBones\\Support\\Str::endsWith", "doc": "&quot;Determine if a given string ends with a given substring.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Support\\Str", "fromLink": "WPKirk/WPBones/Support/Str.html", "link": "WPKirk/WPBones/Support/Str.html#method_finish", "name": "WPKirk\\WPBones\\Support\\Str::finish", "doc": "&quot;Cap a string with a single instance of a given value.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Support\\Str", "fromLink": "WPKirk/WPBones/Support/Str.html", "link": "WPKirk/WPBones/Support/Str.html#method_is", "name": "WPKirk\\WPBones\\Support\\Str::is", "doc": "&quot;Determine if a given string matches a given pattern.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Support\\Str", "fromLink": "WPKirk/WPBones/Support/Str.html", "link": "WPKirk/WPBones/Support/Str.html#method_length", "name": "WPKirk\\WPBones\\Support\\Str::length", "doc": "&quot;Return the length of the given string.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Support\\Str", "fromLink": "WPKirk/WPBones/Support/Str.html", "link": "WPKirk/WPBones/Support/Str.html#method_limit", "name": "WPKirk\\WPBones\\Support\\Str::limit", "doc": "&quot;Limit the number of characters in a string.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Support\\Str", "fromLink": "WPKirk/WPBones/Support/Str.html", "link": "WPKirk/WPBones/Support/Str.html#method_lower", "name": "WPKirk\\WPBones\\Support\\Str::lower", "doc": "&quot;Convert the given string to lower-case.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Support\\Str", "fromLink": "WPKirk/WPBones/Support/Str.html", "link": "WPKirk/WPBones/Support/Str.html#method_words", "name": "WPKirk\\WPBones\\Support\\Str::words", "doc": "&quot;Limit the number of words in a string.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Support\\Str", "fromLink": "WPKirk/WPBones/Support/Str.html", "link": "WPKirk/WPBones/Support/Str.html#method_parseCallback", "name": "WPKirk\\WPBones\\Support\\Str::parseCallback", "doc": "&quot;Parse a Class@method style callback into class and method.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Support\\Str", "fromLink": "WPKirk/WPBones/Support/Str.html", "link": "WPKirk/WPBones/Support/Str.html#method_random", "name": "WPKirk\\WPBones\\Support\\Str::random", "doc": "&quot;Generate a more truly \&quot;random\&quot; alpha-numeric string.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Support\\Str", "fromLink": "WPKirk/WPBones/Support/Str.html", "link": "WPKirk/WPBones/Support/Str.html#method_randomBytes", "name": "WPKirk\\WPBones\\Support\\Str::randomBytes", "doc": "&quot;Generate a more truly \&quot;random\&quot; bytes.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Support\\Str", "fromLink": "WPKirk/WPBones/Support/Str.html", "link": "WPKirk/WPBones/Support/Str.html#method_quickRandom", "name": "WPKirk\\WPBones\\Support\\Str::quickRandom", "doc": "&quot;Generate a \&quot;random\&quot; alpha-numeric string.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Support\\Str", "fromLink": "WPKirk/WPBones/Support/Str.html", "link": "WPKirk/WPBones/Support/Str.html#method_equals", "name": "WPKirk\\WPBones\\Support\\Str::equals", "doc": "&quot;Compares two strings using a constant-time algorithm.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Support\\Str", "fromLink": "WPKirk/WPBones/Support/Str.html", "link": "WPKirk/WPBones/Support/Str.html#method_replaceFirst", "name": "WPKirk\\WPBones\\Support\\Str::replaceFirst", "doc": "&quot;Replace the first occurrence of a given value in the string.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Support\\Str", "fromLink": "WPKirk/WPBones/Support/Str.html", "link": "WPKirk/WPBones/Support/Str.html#method_replaceLast", "name": "WPKirk\\WPBones\\Support\\Str::replaceLast", "doc": "&quot;Replace the last occurrence of a given value in the string.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Support\\Str", "fromLink": "WPKirk/WPBones/Support/Str.html", "link": "WPKirk/WPBones/Support/Str.html#method_upper", "name": "WPKirk\\WPBones\\Support\\Str::upper", "doc": "&quot;Convert the given string to upper-case.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Support\\Str", "fromLink": "WPKirk/WPBones/Support/Str.html", "link": "WPKirk/WPBones/Support/Str.html#method_title", "name": "WPKirk\\WPBones\\Support\\Str::title", "doc": "&quot;Convert the given string to title case.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Support\\Str", "fromLink": "WPKirk/WPBones/Support/Str.html", "link": "WPKirk/WPBones/Support/Str.html#method_slug", "name": "WPKirk\\WPBones\\Support\\Str::slug", "doc": "&quot;Generate a URL friendly \&quot;slug\&quot; from a given string.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Support\\Str", "fromLink": "WPKirk/WPBones/Support/Str.html", "link": "WPKirk/WPBones/Support/Str.html#method_snake", "name": "WPKirk\\WPBones\\Support\\Str::snake", "doc": "&quot;Convert a string to snake case.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Support\\Str", "fromLink": "WPKirk/WPBones/Support/Str.html", "link": "WPKirk/WPBones/Support/Str.html#method_startsWith", "name": "WPKirk\\WPBones\\Support\\Str::startsWith", "doc": "&quot;Determine if a given string starts with a given substring.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Support\\Str", "fromLink": "WPKirk/WPBones/Support/Str.html", "link": "WPKirk/WPBones/Support/Str.html#method_studly", "name": "WPKirk\\WPBones\\Support\\Str::studly", "doc": "&quot;Convert a value to studly caps case.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Support\\Str", "fromLink": "WPKirk/WPBones/Support/Str.html", "link": "WPKirk/WPBones/Support/Str.html#method_substr", "name": "WPKirk\\WPBones\\Support\\Str::substr", "doc": "&quot;Returns the portion of string specified by the start and length parameters.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Support\\Str", "fromLink": "WPKirk/WPBones/Support/Str.html", "link": "WPKirk/WPBones/Support/Str.html#method_ucfirst", "name": "WPKirk\\WPBones\\Support\\Str::ucfirst", "doc": "&quot;Make a string&#039;s first character uppercase.&quot;"},
            
            {"type": "Class", "fromName": "WPKirk\\WPBones\\Support", "fromLink": "WPKirk/WPBones/Support.html", "link": "WPKirk/WPBones/Support/Widget.html", "name": "WPKirk\\WPBones\\Support\\Widget", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "WPKirk\\WPBones\\Support\\Widget", "fromLink": "WPKirk/WPBones/Support/Widget.html", "link": "WPKirk/WPBones/Support/Widget.html#method_viewForm", "name": "WPKirk\\WPBones\\Support\\Widget::viewForm", "doc": "&quot;Return the view resource path. eg: \&quot;widget.form\&quot;.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Support\\Widget", "fromLink": "WPKirk/WPBones/Support/Widget.html", "link": "WPKirk/WPBones/Support/Widget.html#method_viewWidget", "name": "WPKirk\\WPBones\\Support\\Widget::viewWidget", "doc": "&quot;Return the view resource path. eg: \&quot;widget.demo\&quot;.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Support\\Widget", "fromLink": "WPKirk/WPBones/Support/Widget.html", "link": "WPKirk/WPBones/Support/Widget.html#method_defaults", "name": "WPKirk\\WPBones\\Support\\Widget::defaults", "doc": "&quot;Retrun a key pairs array with the default value for widget.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Support\\Widget", "fromLink": "WPKirk/WPBones/Support/Widget.html", "link": "WPKirk/WPBones/Support/Widget.html#method___construct", "name": "WPKirk\\WPBones\\Support\\Widget::__construct", "doc": "&quot;Widget constructor.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Support\\Widget", "fromLink": "WPKirk/WPBones/Support/Widget.html", "link": "WPKirk/WPBones/Support/Widget.html#method_widget", "name": "WPKirk\\WPBones\\Support\\Widget::widget", "doc": "&quot;Echo the widget content.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\Support\\Widget", "fromLink": "WPKirk/WPBones/Support/Widget.html", "link": "WPKirk/WPBones/Support/Widget.html#method_form", "name": "WPKirk\\WPBones\\Support\\Widget::form", "doc": "&quot;Echo the settings update form&quot;"},
            
            {"type": "Class", "fromName": "WPKirk\\WPBones\\View", "fromLink": "WPKirk/WPBones/View.html", "link": "WPKirk/WPBones/View/View.html", "name": "WPKirk\\WPBones\\View\\View", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "WPKirk\\WPBones\\View\\View", "fromLink": "WPKirk/WPBones/View/View.html", "link": "WPKirk/WPBones/View/View.html#method___construct", "name": "WPKirk\\WPBones\\View\\View::__construct", "doc": "&quot;Create a new View.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\View\\View", "fromLink": "WPKirk/WPBones/View/View.html", "link": "WPKirk/WPBones/View/View.html#method___toString", "name": "WPKirk\\WPBones\\View\\View::__toString", "doc": "&quot;Get the string rappresentation of a view.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\View\\View", "fromLink": "WPKirk/WPBones/View/View.html", "link": "WPKirk/WPBones/View/View.html#method_render", "name": "WPKirk\\WPBones\\View\\View::render", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\View\\View", "fromLink": "WPKirk/WPBones/View/View.html", "link": "WPKirk/WPBones/View/View.html#method_withAdminStyles", "name": "WPKirk\\WPBones\\View\\View::withAdminStyles", "doc": "&quot;Load a new css resource in admin area.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\View\\View", "fromLink": "WPKirk/WPBones/View/View.html", "link": "WPKirk/WPBones/View/View.html#method_withAdminScripts", "name": "WPKirk\\WPBones\\View\\View::withAdminScripts", "doc": "&quot;Load a new css resource in admin area.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\View\\View", "fromLink": "WPKirk/WPBones/View/View.html", "link": "WPKirk/WPBones/View/View.html#method_withStyles", "name": "WPKirk\\WPBones\\View\\View::withStyles", "doc": "&quot;Load a new css resource in frontend.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\View\\View", "fromLink": "WPKirk/WPBones/View/View.html", "link": "WPKirk/WPBones/View/View.html#method_withScripts", "name": "WPKirk\\WPBones\\View\\View::withScripts", "doc": "&quot;Load a new css resource in fonrend.&quot;"},
                    {"type": "Method", "fromName": "WPKirk\\WPBones\\View\\View", "fromLink": "WPKirk/WPBones/View/View.html", "link": "WPKirk/WPBones/View/View.html#method_with", "name": "WPKirk\\WPBones\\View\\View::with", "doc": "&quot;Data to pass to the view.&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


