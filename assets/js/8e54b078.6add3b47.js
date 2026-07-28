"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["859723"],{795710(e,a,s){s.r(a),s.d(a,{metadata:()=>i,default:()=>x,frontMatter:()=>c,contentTitle:()=>u,toc:()=>m,assets:()=>h});var i=JSON.parse('{"id":"services/quicksight/analysis/index","title":"analysis","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/quicksight/analysis/index.md","sourceDirName":"services/quicksight/analysis","slug":"/services/quicksight/analysis/","permalink":"/services/quicksight/analysis/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"analysis","hide_title":false,"hide_table_of_contents":false,"keywords":["analysis","quicksight","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"analyses","permalink":"/services/quicksight/analyses/"},"next":{"title":"analysis_definitions","permalink":"/services/quicksight/analysis_definitions/"}}'),t=s(474848),n=s(28453),r=s(97362),l=s(897272),o=s(413554),d=s(541647);let c={title:"analysis",hide_title:!1,hide_table_of_contents:!1,keywords:["analysis","quicksight","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},u,h={},m=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2},{value:"Lifecycle Methods",id:"lifecycle-methods",level:2}];function y(e){let a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:["Creates, updates, deletes, gets or lists an ",(0,t.jsx)("code",{children:"analysis"})," resource."]}),"\n",(0,t.jsx)(a.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)("table",{children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Name"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"analysis"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Type"})}),(0,t.jsx)("td",{children:"Resource"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Id"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"aws.quicksight.analysis"})})]})]})}),"\n",(0,t.jsx)(a.h2,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(a.p,{children:["The following fields are returned by ",(0,t.jsx)(a.code,{children:"SELECT"})," queries:"]}),"\n",(0,t.jsx)(o.A,{defaultValue:"describe_analysis",values:[{label:"describe_analysis",value:"describe_analysis"}],children:(0,t.jsx)(d.A,{value:"describe_analysis",children:(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Datatype"}),(0,t.jsx)("th",{children:"Description"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"Analysis"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"object"})}),(0,t.jsx)("td",{children:"A metadata structure that contains summary information for the analysis that you're describing."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"RequestId"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"The Amazon Web Services request ID for this operation."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"Status"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"integer"})}),(0,t.jsx)("td",{children:"The HTTP status of the request."})]})]})]})})}),"\n",(0,t.jsx)(a.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(a.p,{children:"The following methods are available for this resource:"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Accessible by"}),(0,t.jsx)("th",{children:"Required Params"}),(0,t.jsx)("th",{children:"Optional Params"}),(0,t.jsx)("th",{children:"Description"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#describe_analysis",children:(0,t.jsx)(r.A,{code:"describe_analysis"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"select"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("a",{href:"#parameter-aws_account_id",children:(0,t.jsx)("code",{children:"aws_account_id"})}),", ",(0,t.jsx)("a",{href:"#parameter-analysis_id",children:(0,t.jsx)("code",{children:"analysis_id"})}),", ",(0,t.jsx)("a",{href:"#parameter-region",children:(0,t.jsx)("code",{children:"region"})})]}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:"Provides a summary of the metadata for an analysis."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#create_analysis",children:(0,t.jsx)(r.A,{code:"create_analysis"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"insert"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("a",{href:"#parameter-aws_account_id",children:(0,t.jsx)("code",{children:"aws_account_id"})}),", ",(0,t.jsx)("a",{href:"#parameter-analysis_id",children:(0,t.jsx)("code",{children:"analysis_id"})}),", ",(0,t.jsx)("a",{href:"#parameter-region",children:(0,t.jsx)("code",{children:"region"})}),", ",(0,t.jsx)("a",{href:"#parameter-Name",children:(0,t.jsx)("code",{children:"Name"})})]}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:"Creates an analysis in Amazon Quick Sight. Analyses can be created either from a template or from an AnalysisDefinition."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#update_analysis",children:(0,t.jsx)(r.A,{code:"update_analysis"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"update"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("a",{href:"#parameter-aws_account_id",children:(0,t.jsx)("code",{children:"aws_account_id"})}),", ",(0,t.jsx)("a",{href:"#parameter-analysis_id",children:(0,t.jsx)("code",{children:"analysis_id"})}),", ",(0,t.jsx)("a",{href:"#parameter-region",children:(0,t.jsx)("code",{children:"region"})}),", ",(0,t.jsx)("a",{href:"#parameter-Name",children:(0,t.jsx)("code",{children:"Name"})})]}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:"Updates an analysis in Amazon Quick Sight"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#delete_analysis",children:(0,t.jsx)(r.A,{code:"delete_analysis"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"delete"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("a",{href:"#parameter-aws_account_id",children:(0,t.jsx)("code",{children:"aws_account_id"})}),", ",(0,t.jsx)("a",{href:"#parameter-analysis_id",children:(0,t.jsx)("code",{children:"analysis_id"})}),", ",(0,t.jsx)("a",{href:"#parameter-region",children:(0,t.jsx)("code",{children:"region"})})]}),(0,t.jsxs)("td",{children:[(0,t.jsx)("a",{href:"#parameter-recovery-window-in-days",children:(0,t.jsx)("code",{children:"recovery-window-in-days"})}),", ",(0,t.jsx)("a",{href:"#parameter-force-delete-without-recovery",children:(0,t.jsx)("code",{children:"force-delete-without-recovery"})})]}),(0,t.jsx)("td",{children:"Deletes an analysis from Amazon Quick Sight. You can optionally include a recovery window during which you can restore the analysis. If you don't specify a recovery window value, the operation defaults to 30 days. Amazon Quick Sight attaches a DeletionTime stamp to the response that specifies the end of the recovery window. At the end of the recovery window, Amazon Quick Sight deletes the analysis permanently. At any time before recovery window ends, you can use the RestoreAnalysis API operation to remove the DeletionTime stamp and cancel the deletion of the analysis. The analysis remains visible in the API until it's deleted, so you can describe it but you can't make a template from it. An analysis that's scheduled for deletion isn't accessible in the Amazon Quick Sight console. To access it in the console, restore it. Deleting an analysis doesn't delete the dashboards that you publish from it."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#restore_analysis",children:(0,t.jsx)(r.A,{code:"restore_analysis"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"exec"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("a",{href:"#parameter-aws_account_id",children:(0,t.jsx)("code",{children:"aws_account_id"})}),", ",(0,t.jsx)("a",{href:"#parameter-analysis_id",children:(0,t.jsx)("code",{children:"analysis_id"})}),", ",(0,t.jsx)("a",{href:"#parameter-region",children:(0,t.jsx)("code",{children:"region"})})]}),(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#parameter-restore-to-folders",children:(0,t.jsx)("code",{children:"restore-to-folders"})})}),(0,t.jsx)("td",{children:"Restores an analysis."})]})]})]}),"\n",(0,t.jsx)(a.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(a.p,{children:["Parameters can be passed in the ",(0,t.jsx)(a.code,{children:"WHERE"})," clause of a query. Check the ",(0,t.jsx)(a.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Datatype"}),(0,t.jsx)("th",{children:"Description"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{id:"parameter-analysis_id",children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"analysis_id"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"The ID of the analysis that you're restoring."})]}),(0,t.jsxs)("tr",{id:"parameter-aws_account_id",children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"aws_account_id"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"The ID of the Amazon Web Services account that contains the analysis."})]}),(0,t.jsxs)("tr",{id:"parameter-region",children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"region"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"AWS region (default: us-east-1)"})]}),(0,t.jsxs)("tr",{id:"parameter-force-delete-without-recovery",children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"force-delete-without-recovery"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"boolean"})}),(0,t.jsx)("td",{children:"This option defaults to the value NoForceDeleteWithoutRecovery. To immediately delete the analysis, add the ForceDeleteWithoutRecovery option. You can't restore an analysis after it's deleted."})]}),(0,t.jsxs)("tr",{id:"parameter-recovery-window-in-days",children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"recovery-window-in-days"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"integer (int64)"})}),(0,t.jsx)("td",{children:"A value that specifies the number of days that Amazon Quick Sight waits before it deletes the analysis. You can't use this parameter with the ForceDeleteWithoutRecovery option in the same API call. The default value is 30."})]}),(0,t.jsxs)("tr",{id:"parameter-restore-to-folders",children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"restore-to-folders"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"boolean"})}),(0,t.jsx)("td",{children:"A boolean value that determines if the analysis will be restored to folders that it previously resided in. A True value restores analysis back to all folders that it previously resided in. A False value restores the analysis but does not restore the analysis back to all previously resided folders. Restoring a restricted analysis requires this parameter to be set to True."})]})]})]}),"\n",(0,t.jsxs)(a.h2,{id:"select-examples",children:[(0,t.jsx)(a.code,{children:"SELECT"})," examples"]}),"\n",(0,t.jsx)(o.A,{defaultValue:"describe_analysis",values:[{label:"describe_analysis",value:"describe_analysis"}],children:(0,t.jsxs)(d.A,{value:"describe_analysis",children:[(0,t.jsx)(a.p,{children:"Provides a summary of the metadata for an analysis."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"SELECT\nAnalysis,\nRequestId,\nStatus\nFROM aws.quicksight.analysis\nWHERE aws_account_id = '{{ aws_account_id }}' -- required\nAND analysis_id = '{{ analysis_id }}' -- required\nAND region = '{{ region }}' -- required\n;\n"})})]})}),"\n",(0,t.jsxs)(a.h2,{id:"insert-examples",children:[(0,t.jsx)(a.code,{children:"INSERT"})," examples"]}),"\n",(0,t.jsxs)(o.A,{defaultValue:"create_analysis",values:[{label:"create_analysis",value:"create_analysis"},{label:"Manifest",value:"manifest"}],children:[(0,t.jsxs)(d.A,{value:"create_analysis",children:[(0,t.jsx)(a.p,{children:"Creates an analysis in Amazon Quick Sight. Analyses can be created either from a template or from an AnalysisDefinition."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"INSERT INTO aws.quicksight.analysis (\nName,\nParameters,\nPermissions,\nSourceEntity,\nThemeArn,\nTags,\nDefinition,\nValidationStrategy,\nFolderArns,\naws_account_id,\nanalysis_id,\nregion\n)\nSELECT \n'{{ Name }}' /* required */,\n'{{ Parameters }}',\n'{{ Permissions }}',\n'{{ SourceEntity }}',\n'{{ ThemeArn }}',\n'{{ Tags }}',\n'{{ Definition }}',\n'{{ ValidationStrategy }}',\n'{{ FolderArns }}',\n'{{ aws_account_id }}',\n'{{ analysis_id }}',\n'{{ region }}'\nRETURNING\nAnalysisId,\nArn,\nCreationStatus,\nRequestId,\nStatus\n;\n"})})]}),(0,t.jsx)(d.A,{value:"manifest",children:(0,t.jsx)(l.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: analysis
props:
  - name: aws_account_id
    value: "{{ aws_account_id }}"
    description: Required parameter for the analysis resource.
  - name: analysis_id
    value: "{{ analysis_id }}"
    description: Required parameter for the analysis resource.
  - name: region
    value: "{{ region }}"
    description: Required parameter for the analysis resource.
  - name: Name
    value: "{{ Name }}"
  - name: Parameters
    description: |
      A list of Quick Sight parameters and the list's override values.
    value:
      StringParameters:
        - Name: "{{ Name }}"
          Values: "{{ Values }}"
      IntegerParameters:
        - Name: "{{ Name }}"
          Values: "{{ Values }}"
      DecimalParameters:
        - Name: "{{ Name }}"
          Values: "{{ Values }}"
      DateTimeParameters:
        - Name: "{{ Name }}"
          Values: "{{ Values }}"
  - name: Permissions
    value:
      - Principal: "{{ Principal }}"
        Actions: "{{ Actions }}"
  - name: SourceEntity
    description: |
      The source entity of an analysis.
    value:
      SourceTemplate:
        DataSetReferences:
          - DataSetPlaceholder: "{{ DataSetPlaceholder }}"
            DataSetArn: "{{ DataSetArn }}"
        Arn: "{{ Arn }}"
  - name: ThemeArn
    value: "{{ ThemeArn }}"
  - name: Tags
    value:
      - Key: "{{ Key }}"
        Value: "{{ Value }}"
  - name: Definition
    description: |
      The definition of an analysis.
    value:
      DataSetIdentifierDeclarations:
        - Identifier: "{{ Identifier }}"
          DataSetArn: "{{ DataSetArn }}"
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
  - name: FolderArns
    value:
      - "{{ FolderArns }}"
`})})]}),"\n",(0,t.jsxs)(a.h2,{id:"update-examples",children:[(0,t.jsx)(a.code,{children:"UPDATE"})," examples"]}),"\n",(0,t.jsx)(o.A,{defaultValue:"update_analysis",values:[{label:"update_analysis",value:"update_analysis"}],children:(0,t.jsxs)(d.A,{value:"update_analysis",children:[(0,t.jsx)(a.p,{children:"Updates an analysis in Amazon Quick Sight"}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"UPDATE aws.quicksight.analysis\nSET \nName = '{{ Name }}',\nParameters = '{{ Parameters }}',\nSourceEntity = '{{ SourceEntity }}',\nThemeArn = '{{ ThemeArn }}',\nDefinition = '{{ Definition }}',\nValidationStrategy = '{{ ValidationStrategy }}'\nWHERE \naws_account_id = '{{ aws_account_id }}' --required\nAND analysis_id = '{{ analysis_id }}' --required\nAND region = '{{ region }}' --required\nAND Name = '{{ Name }}' --required\nRETURNING\nAnalysisId,\nArn,\nRequestId,\nStatus,\nUpdateStatus;\n"})})]})}),"\n",(0,t.jsxs)(a.h2,{id:"delete-examples",children:[(0,t.jsx)(a.code,{children:"DELETE"})," examples"]}),"\n",(0,t.jsx)(o.A,{defaultValue:"delete_analysis",values:[{label:"delete_analysis",value:"delete_analysis"}],children:(0,t.jsxs)(d.A,{value:"delete_analysis",children:[(0,t.jsx)(a.p,{children:"Deletes an analysis from Amazon Quick Sight. You can optionally include a recovery window during which you can restore the analysis. If you don't specify a recovery window value, the operation defaults to 30 days. Amazon Quick Sight attaches a DeletionTime stamp to the response that specifies the end of the recovery window. At the end of the recovery window, Amazon Quick Sight deletes the analysis permanently. At any time before recovery window ends, you can use the RestoreAnalysis API operation to remove the DeletionTime stamp and cancel the deletion of the analysis. The analysis remains visible in the API until it's deleted, so you can describe it but you can't make a template from it. An analysis that's scheduled for deletion isn't accessible in the Amazon Quick Sight console. To access it in the console, restore it. Deleting an analysis doesn't delete the dashboards that you publish from it."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"DELETE FROM aws.quicksight.analysis\nWHERE aws_account_id = '{{ aws_account_id }}' --required\nAND analysis_id = '{{ analysis_id }}' --required\nAND region = '{{ region }}' --required\nAND `recovery-window-in-days` = '{{ recovery-window-in-days }}'\nAND `force-delete-without-recovery` = '{{ force-delete-without-recovery }}'\n;\n"})})]})}),"\n",(0,t.jsx)(a.h2,{id:"lifecycle-methods",children:"Lifecycle Methods"}),"\n",(0,t.jsx)(o.A,{defaultValue:"restore_analysis",values:[{label:"restore_analysis",value:"restore_analysis"}],children:(0,t.jsxs)(d.A,{value:"restore_analysis",children:[(0,t.jsx)(a.p,{children:"Restores an analysis."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"EXEC aws.quicksight.analysis.restore_analysis \n@aws_account_id='{{ aws_account_id }}' --required, \n@analysis_id='{{ analysis_id }}' --required, \n@region='{{ region }}' --required, \n@restore-to-folders={{ restore-to-folders }}\n;\n"})})]})})]})}function x(e={}){let{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(y,{...e})}):y(e)}}}]);