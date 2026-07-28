"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["331076"],{490022(e,t,n){n.r(t),n.d(t,{metadata:()=>r,default:()=>j,frontMatter:()=>c,contentTitle:()=>h,toc:()=>x,assets:()=>m});var r=JSON.parse('{"id":"services/quicksight/themes/index","title":"themes","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/quicksight/themes/index.md","sourceDirName":"services/quicksight/themes","slug":"/services/quicksight/themes/","permalink":"/services/quicksight/themes/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"themes","hide_title":false,"hide_table_of_contents":false,"keywords":["themes","quicksight","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"theme_versions","permalink":"/services/quicksight/theme_versions/"},"next":{"title":"topic_permissions","permalink":"/services/quicksight/topic_permissions/"}}'),s=n(474848),i=n(28453),d=n(97362),a=n(897272),o=n(413554),l=n(541647);let c={title:"themes",hide_title:!1,hide_table_of_contents:!1,keywords:["themes","quicksight","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,m={},x=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function u(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Creates, updates, deletes, gets or lists a ",(0,s.jsx)("code",{children:"themes"})," resource."]}),"\n",(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Name"})}),(0,s.jsx)("td",{children:(0,s.jsx)(d.A,{code:"themes"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Type"})}),(0,s.jsx)("td",{children:"Resource"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Id"})}),(0,s.jsx)("td",{children:(0,s.jsx)(d.A,{code:"aws.quicksight.themes"})})]})]})}),"\n",(0,s.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(t.p,{children:["The following fields are returned by ",(0,s.jsx)(t.code,{children:"SELECT"})," queries:"]}),"\n",(0,s.jsxs)(o.A,{defaultValue:"describe_theme",values:[{label:"describe_theme",value:"describe_theme"},{label:"list_themes",value:"list_themes"}],children:[(0,s.jsx)(l.A,{value:"describe_theme",children:(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Datatype"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(d.A,{code:"RequestId"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The Amazon Web Services request ID for this operation."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(d.A,{code:"Status"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"integer"})}),(0,s.jsx)("td",{children:"The HTTP status of the request."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(d.A,{code:"Theme"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"object"})}),(0,s.jsx)("td",{children:"The information about the theme that you are describing."})]})]})]})}),(0,s.jsx)(l.A,{value:"list_themes",children:(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Datatype"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(d.A,{code:"Arn"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The Amazon Resource Name (ARN) of the resource."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(d.A,{code:"CreatedTime"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string (date-time)"})}),(0,s.jsx)("td",{children:"The date and time that this theme was created."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(d.A,{code:"LastUpdatedTime"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string (date-time)"})}),(0,s.jsx)("td",{children:"The last date and time that this theme was updated."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(d.A,{code:"LatestVersionNumber"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"integer (int64)"})}),(0,s.jsx)("td",{children:"The latest version number for the theme."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(d.A,{code:"Name"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"the display name for the theme."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(d.A,{code:"ThemeId"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The ID of the theme. This ID is unique per Amazon Web Services Region for each Amazon Web Services account. (pattern: <code>[\\w-]+</code>)"})]})]})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(t.p,{children:"The following methods are available for this resource:"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Accessible by"}),(0,s.jsx)("th",{children:"Required Params"}),(0,s.jsx)("th",{children:"Optional Params"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#describe_theme",children:(0,s.jsx)(d.A,{code:"describe_theme"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(d.A,{code:"select"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("a",{href:"#parameter-aws_account_id",children:(0,s.jsx)("code",{children:"aws_account_id"})}),", ",(0,s.jsx)("a",{href:"#parameter-theme_id",children:(0,s.jsx)("code",{children:"theme_id"})}),", ",(0,s.jsx)("a",{href:"#parameter-region",children:(0,s.jsx)("code",{children:"region"})})]}),(0,s.jsxs)("td",{children:[(0,s.jsx)("a",{href:"#parameter-version-number",children:(0,s.jsx)("code",{children:"version-number"})}),", ",(0,s.jsx)("a",{href:"#parameter-alias-name",children:(0,s.jsx)("code",{children:"alias-name"})})]}),(0,s.jsx)("td",{children:"Describes a theme."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#list_themes",children:(0,s.jsx)(d.A,{code:"list_themes"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(d.A,{code:"select"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("a",{href:"#parameter-aws_account_id",children:(0,s.jsx)("code",{children:"aws_account_id"})}),", ",(0,s.jsx)("a",{href:"#parameter-region",children:(0,s.jsx)("code",{children:"region"})})]}),(0,s.jsxs)("td",{children:[(0,s.jsx)("a",{href:"#parameter-next-token",children:(0,s.jsx)("code",{children:"next-token"})}),", ",(0,s.jsx)("a",{href:"#parameter-max-results",children:(0,s.jsx)("code",{children:"max-results"})}),", ",(0,s.jsx)("a",{href:"#parameter-type",children:(0,s.jsx)("code",{children:"type"})})]}),(0,s.jsx)("td",{children:"Lists all the themes in the current Amazon Web Services account."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#create_theme",children:(0,s.jsx)(d.A,{code:"create_theme"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(d.A,{code:"insert"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("a",{href:"#parameter-aws_account_id",children:(0,s.jsx)("code",{children:"aws_account_id"})}),", ",(0,s.jsx)("a",{href:"#parameter-theme_id",children:(0,s.jsx)("code",{children:"theme_id"})}),", ",(0,s.jsx)("a",{href:"#parameter-region",children:(0,s.jsx)("code",{children:"region"})}),", ",(0,s.jsx)("a",{href:"#parameter-BaseThemeId",children:(0,s.jsx)("code",{children:"BaseThemeId"})}),", ",(0,s.jsx)("a",{href:"#parameter-Configuration",children:(0,s.jsx)("code",{children:"Configuration"})})]}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Creates a theme. A theme is set of configuration options for color and layout. Themes apply to analyses and dashboards. For more information, see Using Themes in Amazon Quick Sight in the Amazon Quick Sight User Guide."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#update_theme",children:(0,s.jsx)(d.A,{code:"update_theme"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(d.A,{code:"update"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("a",{href:"#parameter-aws_account_id",children:(0,s.jsx)("code",{children:"aws_account_id"})}),", ",(0,s.jsx)("a",{href:"#parameter-theme_id",children:(0,s.jsx)("code",{children:"theme_id"})}),", ",(0,s.jsx)("a",{href:"#parameter-region",children:(0,s.jsx)("code",{children:"region"})}),", ",(0,s.jsx)("a",{href:"#parameter-BaseThemeId",children:(0,s.jsx)("code",{children:"BaseThemeId"})})]}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Updates a theme."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#delete_theme",children:(0,s.jsx)(d.A,{code:"delete_theme"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(d.A,{code:"delete"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("a",{href:"#parameter-aws_account_id",children:(0,s.jsx)("code",{children:"aws_account_id"})}),", ",(0,s.jsx)("a",{href:"#parameter-theme_id",children:(0,s.jsx)("code",{children:"theme_id"})}),", ",(0,s.jsx)("a",{href:"#parameter-region",children:(0,s.jsx)("code",{children:"region"})})]}),(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#parameter-version-number",children:(0,s.jsx)("code",{children:"version-number"})})}),(0,s.jsx)("td",{children:"Deletes a theme."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.p,{children:["Parameters can be passed in the ",(0,s.jsx)(t.code,{children:"WHERE"})," clause of a query. Check the ",(0,s.jsx)(t.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Datatype"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{id:"parameter-aws_account_id",children:[(0,s.jsx)("td",{children:(0,s.jsx)(d.A,{code:"aws_account_id"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The ID of the Amazon Web Services account that contains the theme that you're deleting."})]}),(0,s.jsxs)("tr",{id:"parameter-region",children:[(0,s.jsx)("td",{children:(0,s.jsx)(d.A,{code:"region"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"AWS region (default: us-east-1)"})]}),(0,s.jsxs)("tr",{id:"parameter-theme_id",children:[(0,s.jsx)("td",{children:(0,s.jsx)(d.A,{code:"theme_id"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"An ID for the theme that you want to delete."})]}),(0,s.jsxs)("tr",{id:"parameter-alias-name",children:[(0,s.jsx)("td",{children:(0,s.jsx)(d.A,{code:"alias-name"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The alias of the theme that you want to describe. If you name a specific alias, you describe the version that the alias points to. You can specify the latest version of the theme by providing the keyword $LATEST in the AliasName parameter. The keyword $PUBLISHED doesn't apply to themes."})]}),(0,s.jsxs)("tr",{id:"parameter-max-results",children:[(0,s.jsx)("td",{children:(0,s.jsx)(d.A,{code:"max-results"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"integer"})}),(0,s.jsx)("td",{children:"The maximum number of results to be returned per request."})]}),(0,s.jsxs)("tr",{id:"parameter-next-token",children:[(0,s.jsx)("td",{children:(0,s.jsx)(d.A,{code:"next-token"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The token for the next set of results, or null if there are no more results."})]}),(0,s.jsxs)("tr",{id:"parameter-type",children:[(0,s.jsx)("td",{children:(0,s.jsx)(d.A,{code:"type"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The type of themes that you want to list. Valid options include the following: ALL (default)- Display all existing themes. CUSTOM - Display only the themes created by people using Amazon Quick Sight. QUICKSIGHT - Display only the starting themes defined by Quick Sight."})]}),(0,s.jsxs)("tr",{id:"parameter-version-number",children:[(0,s.jsx)("td",{children:(0,s.jsx)(d.A,{code:"version-number"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"integer (int64)"})}),(0,s.jsx)("td",{children:"The version of the theme that you want to delete. Note: If you don't provide a version number, you're using this call to DeleteTheme to delete all versions of the theme."})]})]})]}),"\n",(0,s.jsxs)(t.h2,{id:"select-examples",children:[(0,s.jsx)(t.code,{children:"SELECT"})," examples"]}),"\n",(0,s.jsxs)(o.A,{defaultValue:"describe_theme",values:[{label:"describe_theme",value:"describe_theme"},{label:"list_themes",value:"list_themes"}],children:[(0,s.jsxs)(l.A,{value:"describe_theme",children:[(0,s.jsx)(t.p,{children:"Describes a theme."}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"SELECT\nRequestId,\nStatus,\nTheme\nFROM aws.quicksight.themes\nWHERE aws_account_id = '{{ aws_account_id }}' -- required\nAND theme_id = '{{ theme_id }}' -- required\nAND region = '{{ region }}' -- required\nAND `version-number` = '{{ version-number }}'\nAND `alias-name` = '{{ alias-name }}'\n;\n"})})]}),(0,s.jsxs)(l.A,{value:"list_themes",children:[(0,s.jsx)(t.p,{children:"Lists all the themes in the current Amazon Web Services account."}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"SELECT\nArn,\nCreatedTime,\nLastUpdatedTime,\nLatestVersionNumber,\nName,\nThemeId\nFROM aws.quicksight.themes\nWHERE aws_account_id = '{{ aws_account_id }}' -- required\nAND region = '{{ region }}' -- required\nAND `next-token` = '{{ next-token }}'\nAND `max-results` = '{{ max-results }}'\nAND type = '{{ type }}'\n;\n"})})]})]}),"\n",(0,s.jsxs)(t.h2,{id:"insert-examples",children:[(0,s.jsx)(t.code,{children:"INSERT"})," examples"]}),"\n",(0,s.jsxs)(o.A,{defaultValue:"create_theme",values:[{label:"create_theme",value:"create_theme"},{label:"Manifest",value:"manifest"}],children:[(0,s.jsxs)(l.A,{value:"create_theme",children:[(0,s.jsx)(t.p,{children:"Creates a theme. A theme is set of configuration options for color and layout. Themes apply to analyses and dashboards. For more information, see Using Themes in Amazon Quick Sight in the Amazon Quick Sight User Guide."}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"INSERT INTO aws.quicksight.themes (\nName,\nBaseThemeId,\nVersionDescription,\nConfiguration,\nPermissions,\nTags,\naws_account_id,\ntheme_id,\nregion\n)\nSELECT \n'{{ Name }}',\n'{{ BaseThemeId }}' /* required */,\n'{{ VersionDescription }}',\n'{{ Configuration }}' /* required */,\n'{{ Permissions }}',\n'{{ Tags }}',\n'{{ aws_account_id }}',\n'{{ theme_id }}',\n'{{ region }}'\nRETURNING\nArn,\nCreationStatus,\nRequestId,\nStatus,\nThemeId,\nVersionArn\n;\n"})})]}),(0,s.jsx)(l.A,{value:"manifest",children:(0,s.jsx)(a.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: themes
props:
  - name: aws_account_id
    value: "{{ aws_account_id }}"
    description: Required parameter for the themes resource.
  - name: theme_id
    value: "{{ theme_id }}"
    description: Required parameter for the themes resource.
  - name: region
    value: "{{ region }}"
    description: Required parameter for the themes resource.
  - name: Name
    value: "{{ Name }}"
  - name: BaseThemeId
    value: "{{ BaseThemeId }}"
  - name: VersionDescription
    value: "{{ VersionDescription }}"
  - name: Configuration
    description: |
      The theme configuration. This configuration contains all of the display properties for a theme.
    value:
      DataColorPalette:
        Colors:
          - "{{ Colors }}"
        MinMaxGradient:
          - "{{ MinMaxGradient }}"
        EmptyFillColor: "{{ EmptyFillColor }}"
      UIColorPalette:
        PrimaryForeground: "{{ PrimaryForeground }}"
        PrimaryBackground: "{{ PrimaryBackground }}"
        SecondaryForeground: "{{ SecondaryForeground }}"
        SecondaryBackground: "{{ SecondaryBackground }}"
        Accent: "{{ Accent }}"
        AccentForeground: "{{ AccentForeground }}"
        Danger: "{{ Danger }}"
        DangerForeground: "{{ DangerForeground }}"
        Warning: "{{ Warning }}"
        WarningForeground: "{{ WarningForeground }}"
        Success: "{{ Success }}"
        SuccessForeground: "{{ SuccessForeground }}"
        Dimension: "{{ Dimension }}"
        DimensionForeground: "{{ DimensionForeground }}"
        Measure: "{{ Measure }}"
        MeasureForeground: "{{ MeasureForeground }}"
      Sheet:
        Tile:
          BackgroundColor: "{{ BackgroundColor }}"
          Border:
            Color: "{{ Color }}"
            Show: {{ Show }}
            Width: "{{ Width }}"
          BorderRadius: "{{ BorderRadius }}"
          Padding: "{{ Padding }}"
        TileLayout:
          Gutter:
            Show: {{ Show }}
          Margin:
            Show: {{ Show }}
        Background:
          Color: "{{ Color }}"
          Gradient: "{{ Gradient }}"
      Typography:
        FontFamilies:
          - FontFamily: "{{ FontFamily }}"
        AxisTitleFontConfiguration:
          FontSize:
            Relative: "{{ Relative }}"
            Absolute: "{{ Absolute }}"
          FontDecoration: "{{ FontDecoration }}"
          FontColor: "{{ FontColor }}"
          FontWeight:
            Name: "{{ Name }}"
          FontStyle: "{{ FontStyle }}"
          FontFamily: "{{ FontFamily }}"
        AxisLabelFontConfiguration:
          FontSize:
            Relative: "{{ Relative }}"
            Absolute: "{{ Absolute }}"
          FontDecoration: "{{ FontDecoration }}"
          FontColor: "{{ FontColor }}"
          FontWeight:
            Name: "{{ Name }}"
          FontStyle: "{{ FontStyle }}"
          FontFamily: "{{ FontFamily }}"
        LegendTitleFontConfiguration:
          FontSize:
            Relative: "{{ Relative }}"
            Absolute: "{{ Absolute }}"
          FontDecoration: "{{ FontDecoration }}"
          FontColor: "{{ FontColor }}"
          FontWeight:
            Name: "{{ Name }}"
          FontStyle: "{{ FontStyle }}"
          FontFamily: "{{ FontFamily }}"
        LegendValueFontConfiguration:
          FontSize:
            Relative: "{{ Relative }}"
            Absolute: "{{ Absolute }}"
          FontDecoration: "{{ FontDecoration }}"
          FontColor: "{{ FontColor }}"
          FontWeight:
            Name: "{{ Name }}"
          FontStyle: "{{ FontStyle }}"
          FontFamily: "{{ FontFamily }}"
        DataLabelFontConfiguration:
          FontSize:
            Relative: "{{ Relative }}"
            Absolute: "{{ Absolute }}"
          FontDecoration: "{{ FontDecoration }}"
          FontColor: "{{ FontColor }}"
          FontWeight:
            Name: "{{ Name }}"
          FontStyle: "{{ FontStyle }}"
          FontFamily: "{{ FontFamily }}"
        VisualTitleFontConfiguration:
          FontConfiguration:
            FontSize:
              Relative: "{{ Relative }}"
              Absolute: "{{ Absolute }}"
            FontDecoration: "{{ FontDecoration }}"
            FontColor: "{{ FontColor }}"
            FontWeight:
              Name: "{{ Name }}"
            FontStyle: "{{ FontStyle }}"
            FontFamily: "{{ FontFamily }}"
          TextAlignment: "{{ TextAlignment }}"
          TextTransform: "{{ TextTransform }}"
        VisualSubtitleFontConfiguration:
          FontConfiguration:
            FontSize:
              Relative: "{{ Relative }}"
              Absolute: "{{ Absolute }}"
            FontDecoration: "{{ FontDecoration }}"
            FontColor: "{{ FontColor }}"
            FontWeight:
              Name: "{{ Name }}"
            FontStyle: "{{ FontStyle }}"
            FontFamily: "{{ FontFamily }}"
          TextAlignment: "{{ TextAlignment }}"
          TextTransform: "{{ TextTransform }}"
        ControlTitleFontConfiguration:
          FontConfiguration:
            FontSize:
              Relative: "{{ Relative }}"
              Absolute: "{{ Absolute }}"
            FontDecoration: "{{ FontDecoration }}"
            FontColor: "{{ FontColor }}"
            FontWeight:
              Name: "{{ Name }}"
            FontStyle: "{{ FontStyle }}"
            FontFamily: "{{ FontFamily }}"
          TextAlignment: "{{ TextAlignment }}"
  - name: Permissions
    value:
      - Principal: "{{ Principal }}"
        Actions: "{{ Actions }}"
  - name: Tags
    value:
      - Key: "{{ Key }}"
        Value: "{{ Value }}"
`})})]}),"\n",(0,s.jsxs)(t.h2,{id:"update-examples",children:[(0,s.jsx)(t.code,{children:"UPDATE"})," examples"]}),"\n",(0,s.jsx)(o.A,{defaultValue:"update_theme",values:[{label:"update_theme",value:"update_theme"}],children:(0,s.jsxs)(l.A,{value:"update_theme",children:[(0,s.jsx)(t.p,{children:"Updates a theme."}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"UPDATE aws.quicksight.themes\nSET \nName = '{{ Name }}',\nBaseThemeId = '{{ BaseThemeId }}',\nVersionDescription = '{{ VersionDescription }}',\nConfiguration = '{{ Configuration }}'\nWHERE \naws_account_id = '{{ aws_account_id }}' --required\nAND theme_id = '{{ theme_id }}' --required\nAND region = '{{ region }}' --required\nAND BaseThemeId = '{{ BaseThemeId }}' --required\nRETURNING\nArn,\nCreationStatus,\nRequestId,\nStatus,\nThemeId,\nVersionArn;\n"})})]})}),"\n",(0,s.jsxs)(t.h2,{id:"delete-examples",children:[(0,s.jsx)(t.code,{children:"DELETE"})," examples"]}),"\n",(0,s.jsx)(o.A,{defaultValue:"delete_theme",values:[{label:"delete_theme",value:"delete_theme"}],children:(0,s.jsxs)(l.A,{value:"delete_theme",children:[(0,s.jsx)(t.p,{children:"Deletes a theme."}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"DELETE FROM aws.quicksight.themes\nWHERE aws_account_id = '{{ aws_account_id }}' --required\nAND theme_id = '{{ theme_id }}' --required\nAND region = '{{ region }}' --required\nAND `version-number` = '{{ version-number }}'\n;\n"})})]})})]})}function j(e={}){let{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}}}]);