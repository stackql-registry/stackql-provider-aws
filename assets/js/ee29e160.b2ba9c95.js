"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["586411"],{885446(e,t,a){a.r(t),a.d(t,{metadata:()=>s,default:()=>x,frontMatter:()=>c,contentTitle:()=>u,toc:()=>h,assets:()=>m});var s=JSON.parse('{"id":"services/quicksight/templates/index","title":"templates","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/quicksight/templates/index.md","sourceDirName":"services/quicksight/templates","slug":"/services/quicksight/templates/","permalink":"/services/quicksight/templates/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"templates","hide_title":false,"hide_table_of_contents":false,"keywords":["templates","quicksight","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"template_versions","permalink":"/services/quicksight/template_versions/"},"next":{"title":"theme_alias","permalink":"/services/quicksight/theme_alias/"}}'),r=a(474848),i=a(28453),n=a(97362),l=a(897272),d=a(413554),o=a(541647);let c={title:"templates",hide_title:!1,hide_table_of_contents:!1,keywords:["templates","quicksight","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},u,m={},h=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function p(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Creates, updates, deletes, gets or lists a ",(0,r.jsx)("code",{children:"templates"})," resource."]}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Name"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"templates"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Type"})}),(0,r.jsx)("td",{children:"Resource"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Id"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"aws.quicksight.templates"})})]})]})}),"\n",(0,r.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(t.p,{children:["The following fields are returned by ",(0,r.jsx)(t.code,{children:"SELECT"})," queries:"]}),"\n",(0,r.jsxs)(d.A,{defaultValue:"describe_template",values:[{label:"describe_template",value:"describe_template"},{label:"list_templates",value:"list_templates"}],children:[(0,r.jsx)(o.A,{value:"describe_template",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"RequestId"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The Amazon Web Services request ID for this operation."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"Status"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"integer"})}),(0,r.jsx)("td",{children:"The HTTP status of the request."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"Template"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"The template structure for the object you want to describe."})]})]})]})}),(0,r.jsx)(o.A,{value:"list_templates",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"Arn"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"A summary of a template."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"CreatedTime"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string (date-time)"})}),(0,r.jsx)("td",{children:"The last time that this template was created."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"LastUpdatedTime"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string (date-time)"})}),(0,r.jsx)("td",{children:"The last time that this template was updated."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"LatestVersionNumber"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"integer (int64)"})}),(0,r.jsx)("td",{children:"A structure containing a list of version numbers for the template summary."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"Name"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"A display name for the template."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"TemplateId"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The ID of the template. This ID is unique per Amazon Web Services Region for each Amazon Web Services account. (pattern: <code>[\\w-]+</code>)"})]})]})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(t.p,{children:"The following methods are available for this resource:"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Accessible by"}),(0,r.jsx)("th",{children:"Required Params"}),(0,r.jsx)("th",{children:"Optional Params"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#describe_template",children:(0,r.jsx)(n.A,{code:"describe_template"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"select"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-aws_account_id",children:(0,r.jsx)("code",{children:"aws_account_id"})}),", ",(0,r.jsx)("a",{href:"#parameter-template_id",children:(0,r.jsx)("code",{children:"template_id"})}),", ",(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})]}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-version-number",children:(0,r.jsx)("code",{children:"version-number"})}),", ",(0,r.jsx)("a",{href:"#parameter-alias-name",children:(0,r.jsx)("code",{children:"alias-name"})})]}),(0,r.jsx)("td",{children:"Describes a template's metadata."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#list_templates",children:(0,r.jsx)(n.A,{code:"list_templates"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"select"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-aws_account_id",children:(0,r.jsx)("code",{children:"aws_account_id"})}),", ",(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})]}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-next-token",children:(0,r.jsx)("code",{children:"next-token"})}),", ",(0,r.jsx)("a",{href:"#parameter-max-result",children:(0,r.jsx)("code",{children:"max-result"})})]}),(0,r.jsx)("td",{children:"Lists all the templates in the current Amazon Quick Sight account."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#create_template",children:(0,r.jsx)(n.A,{code:"create_template"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"insert"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-aws_account_id",children:(0,r.jsx)("code",{children:"aws_account_id"})}),", ",(0,r.jsx)("a",{href:"#parameter-template_id",children:(0,r.jsx)("code",{children:"template_id"})}),", ",(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Creates a template either from a TemplateDefinition or from an existing Quick Sight analysis or template. You can use the resulting template to create additional dashboards, templates, or analyses. A template is an entity in Quick Sight that encapsulates the metadata required to create an analysis and that you can use to create s dashboard. A template adds a layer of abstraction by using placeholders to replace the dataset associated with the analysis. You can use templates to create dashboards by replacing dataset placeholders with datasets that follow the same schema that was used to create the source analysis and template."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#update_template",children:(0,r.jsx)(n.A,{code:"update_template"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"update"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-aws_account_id",children:(0,r.jsx)("code",{children:"aws_account_id"})}),", ",(0,r.jsx)("a",{href:"#parameter-template_id",children:(0,r.jsx)("code",{children:"template_id"})}),", ",(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Updates a template from an existing Amazon Quick Sight analysis or another template."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#delete_template",children:(0,r.jsx)(n.A,{code:"delete_template"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"delete"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-aws_account_id",children:(0,r.jsx)("code",{children:"aws_account_id"})}),", ",(0,r.jsx)("a",{href:"#parameter-template_id",children:(0,r.jsx)("code",{children:"template_id"})}),", ",(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})]}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#parameter-version-number",children:(0,r.jsx)("code",{children:"version-number"})})}),(0,r.jsx)("td",{children:"Deletes a template."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.p,{children:["Parameters can be passed in the ",(0,r.jsx)(t.code,{children:"WHERE"})," clause of a query. Check the ",(0,r.jsx)(t.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{id:"parameter-aws_account_id",children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"aws_account_id"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The ID of the Amazon Web Services account that contains the template that you're deleting."})]}),(0,r.jsxs)("tr",{id:"parameter-region",children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"region"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"AWS region (default: us-east-1)"})]}),(0,r.jsxs)("tr",{id:"parameter-template_id",children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"template_id"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"An ID for the template you want to delete."})]}),(0,r.jsxs)("tr",{id:"parameter-alias-name",children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"alias-name"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The alias of the template that you want to describe. If you name a specific alias, you describe the version that the alias points to. You can specify the latest version of the template by providing the keyword $LATEST in the AliasName parameter. The keyword $PUBLISHED doesn't apply to templates."})]}),(0,r.jsxs)("tr",{id:"parameter-max-result",children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"max-result"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"integer"})}),(0,r.jsx)("td",{children:"The maximum number of results to be returned per request."})]}),(0,r.jsxs)("tr",{id:"parameter-next-token",children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"next-token"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The token for the next set of results, or null if there are no more results."})]}),(0,r.jsxs)("tr",{id:"parameter-version-number",children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"version-number"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"integer (int64)"})}),(0,r.jsx)("td",{children:"Specifies the version of the template that you want to delete. If you don't provide a version number, DeleteTemplate deletes all versions of the template."})]})]})]}),"\n",(0,r.jsxs)(t.h2,{id:"select-examples",children:[(0,r.jsx)(t.code,{children:"SELECT"})," examples"]}),"\n",(0,r.jsxs)(d.A,{defaultValue:"describe_template",values:[{label:"describe_template",value:"describe_template"},{label:"list_templates",value:"list_templates"}],children:[(0,r.jsxs)(o.A,{value:"describe_template",children:[(0,r.jsx)(t.p,{children:"Describes a template's metadata."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT\nRequestId,\nStatus,\nTemplate\nFROM aws.quicksight.templates\nWHERE aws_account_id = '{{ aws_account_id }}' -- required\nAND template_id = '{{ template_id }}' -- required\nAND region = '{{ region }}' -- required\nAND `version-number` = '{{ version-number }}'\nAND `alias-name` = '{{ alias-name }}'\n;\n"})})]}),(0,r.jsxs)(o.A,{value:"list_templates",children:[(0,r.jsx)(t.p,{children:"Lists all the templates in the current Amazon Quick Sight account."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT\nArn,\nCreatedTime,\nLastUpdatedTime,\nLatestVersionNumber,\nName,\nTemplateId\nFROM aws.quicksight.templates\nWHERE aws_account_id = '{{ aws_account_id }}' -- required\nAND region = '{{ region }}' -- required\nAND `next-token` = '{{ next-token }}'\nAND `max-result` = '{{ max-result }}'\n;\n"})})]})]}),"\n",(0,r.jsxs)(t.h2,{id:"insert-examples",children:[(0,r.jsx)(t.code,{children:"INSERT"})," examples"]}),"\n",(0,r.jsxs)(d.A,{defaultValue:"create_template",values:[{label:"create_template",value:"create_template"},{label:"Manifest",value:"manifest"}],children:[(0,r.jsxs)(o.A,{value:"create_template",children:[(0,r.jsx)(t.p,{children:"Creates a template either from a TemplateDefinition or from an existing Quick Sight analysis or template. You can use the resulting template to create additional dashboards, templates, or analyses. A template is an entity in Quick Sight that encapsulates the metadata required to create an analysis and that you can use to create s dashboard. A template adds a layer of abstraction by using placeholders to replace the dataset associated with the analysis. You can use templates to create dashboards by replacing dataset placeholders with datasets that follow the same schema that was used to create the source analysis and template."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"INSERT INTO aws.quicksight.templates (\nName,\nPermissions,\nSourceEntity,\nTags,\nVersionDescription,\nDefinition,\nValidationStrategy,\naws_account_id,\ntemplate_id,\nregion\n)\nSELECT \n'{{ Name }}',\n'{{ Permissions }}',\n'{{ SourceEntity }}',\n'{{ Tags }}',\n'{{ VersionDescription }}',\n'{{ Definition }}',\n'{{ ValidationStrategy }}',\n'{{ aws_account_id }}',\n'{{ template_id }}',\n'{{ region }}'\nRETURNING\nArn,\nCreationStatus,\nRequestId,\nStatus,\nTemplateId,\nVersionArn\n;\n"})})]}),(0,r.jsx)(o.A,{value:"manifest",children:(0,r.jsx)(l.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: templates
props:
  - name: aws_account_id
    value: "{{ aws_account_id }}"
    description: Required parameter for the templates resource.
  - name: template_id
    value: "{{ template_id }}"
    description: Required parameter for the templates resource.
  - name: region
    value: "{{ region }}"
    description: Required parameter for the templates resource.
  - name: Name
    value: "{{ Name }}"
  - name: Permissions
    value:
      - Principal: "{{ Principal }}"
        Actions: "{{ Actions }}"
  - name: SourceEntity
    description: |
      The source entity of the template.
    value:
      SourceAnalysis:
        Arn: "{{ Arn }}"
        DataSetReferences:
          - DataSetPlaceholder: "{{ DataSetPlaceholder }}"
            DataSetArn: "{{ DataSetArn }}"
      SourceTemplate:
        Arn: "{{ Arn }}"
  - name: Tags
    value:
      - Key: "{{ Key }}"
        Value: "{{ Value }}"
  - name: VersionDescription
    value: "{{ VersionDescription }}"
  - name: Definition
    description: |
      The detailed definition of a template.
    value:
      DataSetConfigurations:
        - Placeholder: "{{ Placeholder }}"
          DataSetSchema:
            ColumnSchemaList:
              - Name: "{{ Name }}"
                DataType: "{{ DataType }}"
                GeographicRole: "{{ GeographicRole }}"
          ColumnGroupSchemaList: "{{ ColumnGroupSchemaList }}"
      Sheets:
        - SheetId: "{{ SheetId }}"
          Title: "{{ Title }}"
          Description: "{{ Description }}"
          Name: "{{ Name }}"
          ParameterControls: "{{ ParameterControls }}"
          FilterControls: "{{ FilterControls }}"
          Visuals: "{{ Visuals }}"
          TextBoxes: "{{ TextBoxes }}"
          Images: "{{ Images }}"
          Layouts: "{{ Layouts }}"
          SheetControlLayouts: "{{ SheetControlLayouts }}"
          ContentType: "{{ ContentType }}"
          CustomActionDefaults:
            highlightOperation:
              Trigger: "{{ Trigger }}"
      TooltipSheets:
        - SheetId: "{{ SheetId }}"
          Name: "{{ Name }}"
          Visuals: "{{ Visuals }}"
          TextBoxes: "{{ TextBoxes }}"
          Images: "{{ Images }}"
          Layouts: "{{ Layouts }}"
      CalculatedFields:
        - DataSetIdentifier: "{{ DataSetIdentifier }}"
          Name: "{{ Name }}"
          Expression: "{{ Expression }}"
      ParameterDeclarations:
        - StringParameterDeclaration:
            ParameterValueType: "{{ ParameterValueType }}"
            Name: "{{ Name }}"
            DefaultValues:
              DynamicValue:
                UserNameColumn: "{{ UserNameColumn }}"
                GroupNameColumn: "{{ GroupNameColumn }}"
                DefaultValueColumn: "{{ DefaultValueColumn }}"
              StaticValues:
                - "{{ StaticValues }}"
            ValueWhenUnset:
              ValueWhenUnsetOption: "{{ ValueWhenUnsetOption }}"
              CustomValue: "{{ CustomValue }}"
            MappedDataSetParameters:
              - DataSetIdentifier: "{{ DataSetIdentifier }}"
                DataSetParameterName: "{{ DataSetParameterName }}"
          DecimalParameterDeclaration:
            ParameterValueType: "{{ ParameterValueType }}"
            Name: "{{ Name }}"
            DefaultValues:
              DynamicValue:
                UserNameColumn: "{{ UserNameColumn }}"
                GroupNameColumn: "{{ GroupNameColumn }}"
                DefaultValueColumn: "{{ DefaultValueColumn }}"
              StaticValues:
                - {{ StaticValues }}
            ValueWhenUnset:
              ValueWhenUnsetOption: "{{ ValueWhenUnsetOption }}"
              CustomValue: {{ CustomValue }}
            MappedDataSetParameters:
              - DataSetIdentifier: "{{ DataSetIdentifier }}"
                DataSetParameterName: "{{ DataSetParameterName }}"
          IntegerParameterDeclaration:
            ParameterValueType: "{{ ParameterValueType }}"
            Name: "{{ Name }}"
            DefaultValues:
              DynamicValue:
                UserNameColumn: "{{ UserNameColumn }}"
                GroupNameColumn: "{{ GroupNameColumn }}"
                DefaultValueColumn: "{{ DefaultValueColumn }}"
              StaticValues:
                - {{ StaticValues }}
            ValueWhenUnset:
              ValueWhenUnsetOption: "{{ ValueWhenUnsetOption }}"
              CustomValue: {{ CustomValue }}
            MappedDataSetParameters:
              - DataSetIdentifier: "{{ DataSetIdentifier }}"
                DataSetParameterName: "{{ DataSetParameterName }}"
          DateTimeParameterDeclaration:
            Name: "{{ Name }}"
            DefaultValues:
              DynamicValue:
                UserNameColumn: "{{ UserNameColumn }}"
                GroupNameColumn: "{{ GroupNameColumn }}"
                DefaultValueColumn: "{{ DefaultValueColumn }}"
              StaticValues:
                - "{{ StaticValues }}"
              RollingDate:
                DataSetIdentifier: "{{ DataSetIdentifier }}"
                Expression: "{{ Expression }}"
            TimeGranularity: "{{ TimeGranularity }}"
            ValueWhenUnset:
              ValueWhenUnsetOption: "{{ ValueWhenUnsetOption }}"
              CustomValue: "{{ CustomValue }}"
            MappedDataSetParameters:
              - DataSetIdentifier: "{{ DataSetIdentifier }}"
                DataSetParameterName: "{{ DataSetParameterName }}"
      FilterGroups:
        - FilterGroupId: "{{ FilterGroupId }}"
          Filters: "{{ Filters }}"
          ScopeConfiguration:
            SelectedSheets:
              SheetVisualScopingConfigurations:
                - SheetId: "{{ SheetId }}"
                  Scope: "{{ Scope }}"
                  VisualIds: "{{ VisualIds }}"
            AllSheets: "{{ AllSheets }}"
          Status: "{{ Status }}"
          CrossDataset: "{{ CrossDataset }}"
      ColumnConfigurations:
        - Column:
            DataSetIdentifier: "{{ DataSetIdentifier }}"
            ColumnName: "{{ ColumnName }}"
          FormatConfiguration:
            StringFormatConfiguration:
              NullValueFormatConfiguration:
                NullString: "{{ NullString }}"
              NumericFormatConfiguration:
                NumberDisplayFormatConfiguration: "{{ NumberDisplayFormatConfiguration }}"
                CurrencyDisplayFormatConfiguration: "{{ CurrencyDisplayFormatConfiguration }}"
                PercentageDisplayFormatConfiguration: "{{ PercentageDisplayFormatConfiguration }}"
            NumberFormatConfiguration:
              FormatConfiguration:
                NumberDisplayFormatConfiguration: "{{ NumberDisplayFormatConfiguration }}"
                CurrencyDisplayFormatConfiguration: "{{ CurrencyDisplayFormatConfiguration }}"
                PercentageDisplayFormatConfiguration: "{{ PercentageDisplayFormatConfiguration }}"
            DateTimeFormatConfiguration:
              DateTimeFormat: "{{ DateTimeFormat }}"
              NullValueFormatConfiguration:
                NullString: "{{ NullString }}"
              NumericFormatConfiguration:
                NumberDisplayFormatConfiguration: "{{ NumberDisplayFormatConfiguration }}"
                CurrencyDisplayFormatConfiguration: "{{ CurrencyDisplayFormatConfiguration }}"
                PercentageDisplayFormatConfiguration: "{{ PercentageDisplayFormatConfiguration }}"
          Role: "{{ Role }}"
          ColorsConfiguration:
            CustomColors:
              - FieldValue: "{{ FieldValue }}"
                Color: "{{ Color }}"
                SpecialValue: "{{ SpecialValue }}"
          DecalSettingsConfiguration:
            CustomDecalSettings:
              - ElementValue: "{{ ElementValue }}"
                DecalVisibility: "{{ DecalVisibility }}"
                DecalColor: "{{ DecalColor }}"
                DecalPatternType: "{{ DecalPatternType }}"
                DecalStyleType: "{{ DecalStyleType }}"
      AnalysisDefaults:
        DefaultNewSheetConfiguration:
          InteractiveLayoutConfiguration:
            Grid:
              CanvasSizeOptions: "{{ CanvasSizeOptions }}"
            FreeForm:
              CanvasSizeOptions: "{{ CanvasSizeOptions }}"
          PaginatedLayoutConfiguration:
            SectionBased:
              CanvasSizeOptions: "{{ CanvasSizeOptions }}"
          SheetContentType: "{{ SheetContentType }}"
      Options:
        Timezone: "{{ Timezone }}"
        WeekStart: "{{ WeekStart }}"
        QBusinessInsightsStatus: "{{ QBusinessInsightsStatus }}"
        ExcludedDataSetArns:
          - "{{ ExcludedDataSetArns }}"
        CustomActionDefaults:
          highlightOperation:
            Trigger: "{{ Trigger }}"
      QueryExecutionOptions:
        QueryExecutionMode: "{{ QueryExecutionMode }}"
      StaticFiles:
        - ImageStaticFile:
            StaticFileId: "{{ StaticFileId }}"
            Source:
              UrlOptions:
                Url: "{{ Url }}"
              S3Options:
                BucketName: "{{ BucketName }}"
                ObjectKey: "{{ ObjectKey }}"
                Region: "{{ Region }}"
          SpatialStaticFile:
            StaticFileId: "{{ StaticFileId }}"
            Source:
              UrlOptions:
                Url: "{{ Url }}"
              S3Options:
                BucketName: "{{ BucketName }}"
                ObjectKey: "{{ ObjectKey }}"
                Region: "{{ Region }}"
  - name: ValidationStrategy
    description: |
      The option to relax the validation that is required to create and update analyses, dashboards, and templates with definition objects. When you set this value to LENIENT, validation is skipped for specific errors.
    value:
      Mode: "{{ Mode }}"
`})})]}),"\n",(0,r.jsxs)(t.h2,{id:"update-examples",children:[(0,r.jsx)(t.code,{children:"UPDATE"})," examples"]}),"\n",(0,r.jsx)(d.A,{defaultValue:"update_template",values:[{label:"update_template",value:"update_template"}],children:(0,r.jsxs)(o.A,{value:"update_template",children:[(0,r.jsx)(t.p,{children:"Updates a template from an existing Amazon Quick Sight analysis or another template."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"UPDATE aws.quicksight.templates\nSET \nSourceEntity = '{{ SourceEntity }}',\nVersionDescription = '{{ VersionDescription }}',\nName = '{{ Name }}',\nDefinition = '{{ Definition }}',\nValidationStrategy = '{{ ValidationStrategy }}'\nWHERE \naws_account_id = '{{ aws_account_id }}' --required\nAND template_id = '{{ template_id }}' --required\nAND region = '{{ region }}' --required\nRETURNING\nArn,\nCreationStatus,\nRequestId,\nStatus,\nTemplateId,\nVersionArn;\n"})})]})}),"\n",(0,r.jsxs)(t.h2,{id:"delete-examples",children:[(0,r.jsx)(t.code,{children:"DELETE"})," examples"]}),"\n",(0,r.jsx)(d.A,{defaultValue:"delete_template",values:[{label:"delete_template",value:"delete_template"}],children:(0,r.jsxs)(o.A,{value:"delete_template",children:[(0,r.jsx)(t.p,{children:"Deletes a template."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"DELETE FROM aws.quicksight.templates\nWHERE aws_account_id = '{{ aws_account_id }}' --required\nAND template_id = '{{ template_id }}' --required\nAND region = '{{ region }}' --required\nAND `version-number` = '{{ version-number }}'\n;\n"})})]})})]})}function x(e={}){let{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}}}]);