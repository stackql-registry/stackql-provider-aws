--- 
title: custom_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_permissions
  - quicksight
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>custom_permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.custom_permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_custom_permissions"
    values={[
        { label: 'describe_custom_permissions', value: 'describe_custom_permissions' },
        { label: 'list_custom_permissions', value: 'list_custom_permissions' }
    ]}
>
<TabItem value="describe_custom_permissions">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="CustomPermissions" /></td>
    <td><code>object</code></td>
    <td>The custom permissions profile.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_custom_permissions">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the custom permissions profile.</td>
</tr>
<tr>
    <td><CopyableCode code="Capabilities" /></td>
    <td><code>object</code></td>
    <td>A set of actions that correspond to Amazon Quick Sight permissions.</td>
</tr>
<tr>
    <td><CopyableCode code="CustomPermissionsName" /></td>
    <td><code>string</code></td>
    <td>The name of the custom permissions profile. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9+=,.@_-&#93;+$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#describe_custom_permissions"><CopyableCode code="describe_custom_permissions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-custom_permissions_name"><code>custom_permissions_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a custom permissions profile.</td>
</tr>
<tr>
    <td><a href="#list_custom_permissions"><CopyableCode code="list_custom_permissions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Returns a list of all the custom permissions profiles.</td>
</tr>
<tr>
    <td><a href="#create_custom_permissions"><CopyableCode code="create_custom_permissions" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CustomPermissionsName"><code>CustomPermissionsName</code></a></td>
    <td></td>
    <td>Creates a custom permissions profile.</td>
</tr>
<tr>
    <td><a href="#update_user_custom_permission"><CopyableCode code="update_user_custom_permission" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-user_name"><code>user_name</code></a>, <a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CustomPermissionsName"><code>CustomPermissionsName</code></a></td>
    <td></td>
    <td>Updates a custom permissions profile for a user.</td>
</tr>
<tr>
    <td><a href="#update_custom_permissions"><CopyableCode code="update_custom_permissions" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-custom_permissions_name"><code>custom_permissions_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a custom permissions profile.</td>
</tr>
<tr>
    <td><a href="#delete_user_custom_permission"><CopyableCode code="delete_user_custom_permission" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-user_name"><code>user_name</code></a>, <a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a custom permissions profile from a user.</td>
</tr>
<tr>
    <td><a href="#delete_custom_permissions"><CopyableCode code="delete_custom_permissions" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-custom_permissions_name"><code>custom_permissions_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a custom permissions profile.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that contains the custom permissions profile that you want to delete.</td>
</tr>
<tr id="parameter-custom_permissions_name">
    <td><CopyableCode code="custom_permissions_name" /></td>
    <td><code>string</code></td>
    <td>The name of the custom permissions profile that you want to delete.</td>
</tr>
<tr id="parameter-namespace">
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace that the user belongs to.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-user_name">
    <td><CopyableCode code="user_name" /></td>
    <td><code>string</code></td>
    <td>The username of the user that you want to remove custom permissions from.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null if there are no more results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_custom_permissions"
    values={[
        { label: 'describe_custom_permissions', value: 'describe_custom_permissions' },
        { label: 'list_custom_permissions', value: 'list_custom_permissions' }
    ]}
>
<TabItem value="describe_custom_permissions">

Describes a custom permissions profile.

```sql
SELECT
CustomPermissions,
RequestId,
Status
FROM aws.quicksight.custom_permissions
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND custom_permissions_name = '{{ custom_permissions_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_custom_permissions">

Returns a list of all the custom permissions profiles.

```sql
SELECT
Arn,
Capabilities,
CustomPermissionsName
FROM aws.quicksight.custom_permissions
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_custom_permissions"
    values={[
        { label: 'create_custom_permissions', value: 'create_custom_permissions' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_custom_permissions">

Creates a custom permissions profile.

```sql
INSERT INTO aws.quicksight.custom_permissions (
CustomPermissionsName,
Capabilities,
Tags,
aws_account_id,
region
)
SELECT 
'{{ CustomPermissionsName }}' /* required */,
'{{ Capabilities }}',
'{{ Tags }}',
'{{ aws_account_id }}',
'{{ region }}'
RETURNING
Arn,
RequestId,
Status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: custom_permissions
  props:
    - name: aws_account_id
      value: "{{ aws_account_id }}"
      description: Required parameter for the custom_permissions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the custom_permissions resource.
    - name: CustomPermissionsName
      value: "{{ CustomPermissionsName }}"
    - name: Capabilities
      description: |
        A set of actions that correspond to Amazon Quick Sight permissions.
      value:
        ExportToCsv: "{{ ExportToCsv }}"
        ExportToExcel: "{{ ExportToExcel }}"
        ExportToPdf: "{{ ExportToPdf }}"
        PrintReports: "{{ PrintReports }}"
        CreateAndUpdateThemes: "{{ CreateAndUpdateThemes }}"
        AddOrRunAnomalyDetectionForAnalyses: "{{ AddOrRunAnomalyDetectionForAnalyses }}"
        ShareAnalyses: "{{ ShareAnalyses }}"
        CreateAndUpdateDatasets: "{{ CreateAndUpdateDatasets }}"
        ShareDatasets: "{{ ShareDatasets }}"
        SubscribeDashboardEmailReports: "{{ SubscribeDashboardEmailReports }}"
        CreateAndUpdateDashboardEmailReports: "{{ CreateAndUpdateDashboardEmailReports }}"
        ShareDashboards: "{{ ShareDashboards }}"
        CreateAndUpdateThresholdAlerts: "{{ CreateAndUpdateThresholdAlerts }}"
        RenameSharedFolders: "{{ RenameSharedFolders }}"
        CreateSharedFolders: "{{ CreateSharedFolders }}"
        CreateAndUpdateDataSources: "{{ CreateAndUpdateDataSources }}"
        ShareDataSources: "{{ ShareDataSources }}"
        ViewAccountSPICECapacity: "{{ ViewAccountSPICECapacity }}"
        CreateSPICEDataset: "{{ CreateSPICEDataset }}"
        ExportToPdfInScheduledReports: "{{ ExportToPdfInScheduledReports }}"
        ExportToCsvInScheduledReports: "{{ ExportToCsvInScheduledReports }}"
        ExportToExcelInScheduledReports: "{{ ExportToExcelInScheduledReports }}"
        IncludeContentInScheduledReportsEmail: "{{ IncludeContentInScheduledReportsEmail }}"
        Dashboard: "{{ Dashboard }}"
        Analysis: "{{ Analysis }}"
        Automate: "{{ Automate }}"
        Flow: "{{ Flow }}"
        Apps: "{{ Apps }}"
        CreateAndUpdateApps: "{{ CreateAndUpdateApps }}"
        ShareApps: "{{ ShareApps }}"
        InvokeAppsAIInference: "{{ InvokeAppsAIInference }}"
        AccessAppsNativeDataStore: "{{ AccessAppsNativeDataStore }}"
        PublishWithoutApproval: "{{ PublishWithoutApproval }}"
        UseBedrockModels: "{{ UseBedrockModels }}"
        PerformFlowUiTask: "{{ PerformFlowUiTask }}"
        ApproveFlowShareRequests: "{{ ApproveFlowShareRequests }}"
        UseAgentWebSearch: "{{ UseAgentWebSearch }}"
        KnowledgeBase: "{{ KnowledgeBase }}"
        Action: "{{ Action }}"
        GenericHTTPAction: "{{ GenericHTTPAction }}"
        CreateAndUpdateGenericHTTPAction: "{{ CreateAndUpdateGenericHTTPAction }}"
        ShareGenericHTTPAction: "{{ ShareGenericHTTPAction }}"
        UseGenericHTTPAction: "{{ UseGenericHTTPAction }}"
        AsanaAction: "{{ AsanaAction }}"
        CreateAndUpdateAsanaAction: "{{ CreateAndUpdateAsanaAction }}"
        ShareAsanaAction: "{{ ShareAsanaAction }}"
        UseAsanaAction: "{{ UseAsanaAction }}"
        SlackAction: "{{ SlackAction }}"
        CreateAndUpdateSlackAction: "{{ CreateAndUpdateSlackAction }}"
        ShareSlackAction: "{{ ShareSlackAction }}"
        UseSlackAction: "{{ UseSlackAction }}"
        ServiceNowAction: "{{ ServiceNowAction }}"
        CreateAndUpdateServiceNowAction: "{{ CreateAndUpdateServiceNowAction }}"
        ShareServiceNowAction: "{{ ShareServiceNowAction }}"
        UseServiceNowAction: "{{ UseServiceNowAction }}"
        SalesforceAction: "{{ SalesforceAction }}"
        CreateAndUpdateSalesforceAction: "{{ CreateAndUpdateSalesforceAction }}"
        ShareSalesforceAction: "{{ ShareSalesforceAction }}"
        UseSalesforceAction: "{{ UseSalesforceAction }}"
        MSExchangeAction: "{{ MSExchangeAction }}"
        CreateAndUpdateMSExchangeAction: "{{ CreateAndUpdateMSExchangeAction }}"
        ShareMSExchangeAction: "{{ ShareMSExchangeAction }}"
        UseMSExchangeAction: "{{ UseMSExchangeAction }}"
        PagerDutyAction: "{{ PagerDutyAction }}"
        CreateAndUpdatePagerDutyAction: "{{ CreateAndUpdatePagerDutyAction }}"
        SharePagerDutyAction: "{{ SharePagerDutyAction }}"
        UsePagerDutyAction: "{{ UsePagerDutyAction }}"
        JiraAction: "{{ JiraAction }}"
        CreateAndUpdateJiraAction: "{{ CreateAndUpdateJiraAction }}"
        ShareJiraAction: "{{ ShareJiraAction }}"
        UseJiraAction: "{{ UseJiraAction }}"
        ConfluenceAction: "{{ ConfluenceAction }}"
        CreateAndUpdateConfluenceAction: "{{ CreateAndUpdateConfluenceAction }}"
        ShareConfluenceAction: "{{ ShareConfluenceAction }}"
        UseConfluenceAction: "{{ UseConfluenceAction }}"
        OneDriveAction: "{{ OneDriveAction }}"
        CreateAndUpdateOneDriveAction: "{{ CreateAndUpdateOneDriveAction }}"
        ShareOneDriveAction: "{{ ShareOneDriveAction }}"
        UseOneDriveAction: "{{ UseOneDriveAction }}"
        SharePointAction: "{{ SharePointAction }}"
        CreateAndUpdateSharePointAction: "{{ CreateAndUpdateSharePointAction }}"
        ShareSharePointAction: "{{ ShareSharePointAction }}"
        UseSharePointAction: "{{ UseSharePointAction }}"
        MSTeamsAction: "{{ MSTeamsAction }}"
        CreateAndUpdateMSTeamsAction: "{{ CreateAndUpdateMSTeamsAction }}"
        ShareMSTeamsAction: "{{ ShareMSTeamsAction }}"
        UseMSTeamsAction: "{{ UseMSTeamsAction }}"
        GoogleCalendarAction: "{{ GoogleCalendarAction }}"
        CreateAndUpdateGoogleCalendarAction: "{{ CreateAndUpdateGoogleCalendarAction }}"
        ShareGoogleCalendarAction: "{{ ShareGoogleCalendarAction }}"
        UseGoogleCalendarAction: "{{ UseGoogleCalendarAction }}"
        ZendeskAction: "{{ ZendeskAction }}"
        CreateAndUpdateZendeskAction: "{{ CreateAndUpdateZendeskAction }}"
        ShareZendeskAction: "{{ ShareZendeskAction }}"
        UseZendeskAction: "{{ UseZendeskAction }}"
        SmartsheetAction: "{{ SmartsheetAction }}"
        CreateAndUpdateSmartsheetAction: "{{ CreateAndUpdateSmartsheetAction }}"
        ShareSmartsheetAction: "{{ ShareSmartsheetAction }}"
        UseSmartsheetAction: "{{ UseSmartsheetAction }}"
        SAPBusinessPartnerAction: "{{ SAPBusinessPartnerAction }}"
        CreateAndUpdateSAPBusinessPartnerAction: "{{ CreateAndUpdateSAPBusinessPartnerAction }}"
        ShareSAPBusinessPartnerAction: "{{ ShareSAPBusinessPartnerAction }}"
        UseSAPBusinessPartnerAction: "{{ UseSAPBusinessPartnerAction }}"
        SAPProductMasterDataAction: "{{ SAPProductMasterDataAction }}"
        CreateAndUpdateSAPProductMasterDataAction: "{{ CreateAndUpdateSAPProductMasterDataAction }}"
        ShareSAPProductMasterDataAction: "{{ ShareSAPProductMasterDataAction }}"
        UseSAPProductMasterDataAction: "{{ UseSAPProductMasterDataAction }}"
        SAPPhysicalInventoryAction: "{{ SAPPhysicalInventoryAction }}"
        CreateAndUpdateSAPPhysicalInventoryAction: "{{ CreateAndUpdateSAPPhysicalInventoryAction }}"
        ShareSAPPhysicalInventoryAction: "{{ ShareSAPPhysicalInventoryAction }}"
        UseSAPPhysicalInventoryAction: "{{ UseSAPPhysicalInventoryAction }}"
        SAPBillOfMaterialAction: "{{ SAPBillOfMaterialAction }}"
        CreateAndUpdateSAPBillOfMaterialAction: "{{ CreateAndUpdateSAPBillOfMaterialAction }}"
        ShareSAPBillOfMaterialAction: "{{ ShareSAPBillOfMaterialAction }}"
        UseSAPBillOfMaterialAction: "{{ UseSAPBillOfMaterialAction }}"
        SAPMaterialStockAction: "{{ SAPMaterialStockAction }}"
        CreateAndUpdateSAPMaterialStockAction: "{{ CreateAndUpdateSAPMaterialStockAction }}"
        ShareSAPMaterialStockAction: "{{ ShareSAPMaterialStockAction }}"
        UseSAPMaterialStockAction: "{{ UseSAPMaterialStockAction }}"
        FactSetAction: "{{ FactSetAction }}"
        CreateAndUpdateFactSetAction: "{{ CreateAndUpdateFactSetAction }}"
        ShareFactSetAction: "{{ ShareFactSetAction }}"
        UseFactSetAction: "{{ UseFactSetAction }}"
        AmazonSThreeAction: "{{ AmazonSThreeAction }}"
        CreateAndUpdateAmazonSThreeAction: "{{ CreateAndUpdateAmazonSThreeAction }}"
        ShareAmazonSThreeAction: "{{ ShareAmazonSThreeAction }}"
        UseAmazonSThreeAction: "{{ UseAmazonSThreeAction }}"
        TextractAction: "{{ TextractAction }}"
        CreateAndUpdateTextractAction: "{{ CreateAndUpdateTextractAction }}"
        ShareTextractAction: "{{ ShareTextractAction }}"
        UseTextractAction: "{{ UseTextractAction }}"
        ComprehendAction: "{{ ComprehendAction }}"
        CreateAndUpdateComprehendAction: "{{ CreateAndUpdateComprehendAction }}"
        ShareComprehendAction: "{{ ShareComprehendAction }}"
        UseComprehendAction: "{{ UseComprehendAction }}"
        ComprehendMedicalAction: "{{ ComprehendMedicalAction }}"
        CreateAndUpdateComprehendMedicalAction: "{{ CreateAndUpdateComprehendMedicalAction }}"
        ShareComprehendMedicalAction: "{{ ShareComprehendMedicalAction }}"
        UseComprehendMedicalAction: "{{ UseComprehendMedicalAction }}"
        AmazonBedrockARSAction: "{{ AmazonBedrockARSAction }}"
        CreateAndUpdateAmazonBedrockARSAction: "{{ CreateAndUpdateAmazonBedrockARSAction }}"
        ShareAmazonBedrockARSAction: "{{ ShareAmazonBedrockARSAction }}"
        UseAmazonBedrockARSAction: "{{ UseAmazonBedrockARSAction }}"
        AmazonBedrockFSAction: "{{ AmazonBedrockFSAction }}"
        CreateAndUpdateAmazonBedrockFSAction: "{{ CreateAndUpdateAmazonBedrockFSAction }}"
        ShareAmazonBedrockFSAction: "{{ ShareAmazonBedrockFSAction }}"
        UseAmazonBedrockFSAction: "{{ UseAmazonBedrockFSAction }}"
        AmazonBedrockKRSAction: "{{ AmazonBedrockKRSAction }}"
        CreateAndUpdateAmazonBedrockKRSAction: "{{ CreateAndUpdateAmazonBedrockKRSAction }}"
        ShareAmazonBedrockKRSAction: "{{ ShareAmazonBedrockKRSAction }}"
        UseAmazonBedrockKRSAction: "{{ UseAmazonBedrockKRSAction }}"
        MCPAction: "{{ MCPAction }}"
        CreateAndUpdateMCPAction: "{{ CreateAndUpdateMCPAction }}"
        ShareMCPAction: "{{ ShareMCPAction }}"
        UseMCPAction: "{{ UseMCPAction }}"
        OpenAPIAction: "{{ OpenAPIAction }}"
        CreateAndUpdateOpenAPIAction: "{{ CreateAndUpdateOpenAPIAction }}"
        ShareOpenAPIAction: "{{ ShareOpenAPIAction }}"
        UseOpenAPIAction: "{{ UseOpenAPIAction }}"
        SandPGMIAction: "{{ SandPGMIAction }}"
        CreateAndUpdateSandPGMIAction: "{{ CreateAndUpdateSandPGMIAction }}"
        ShareSandPGMIAction: "{{ ShareSandPGMIAction }}"
        UseSandPGMIAction: "{{ UseSandPGMIAction }}"
        SandPGlobalEnergyAction: "{{ SandPGlobalEnergyAction }}"
        CreateAndUpdateSandPGlobalEnergyAction: "{{ CreateAndUpdateSandPGlobalEnergyAction }}"
        ShareSandPGlobalEnergyAction: "{{ ShareSandPGlobalEnergyAction }}"
        UseSandPGlobalEnergyAction: "{{ UseSandPGlobalEnergyAction }}"
        BambooHRAction: "{{ BambooHRAction }}"
        CreateAndUpdateBambooHRAction: "{{ CreateAndUpdateBambooHRAction }}"
        ShareBambooHRAction: "{{ ShareBambooHRAction }}"
        UseBambooHRAction: "{{ UseBambooHRAction }}"
        BoxAgentAction: "{{ BoxAgentAction }}"
        CreateAndUpdateBoxAgentAction: "{{ CreateAndUpdateBoxAgentAction }}"
        ShareBoxAgentAction: "{{ ShareBoxAgentAction }}"
        UseBoxAgentAction: "{{ UseBoxAgentAction }}"
        CanvaAgentAction: "{{ CanvaAgentAction }}"
        CreateAndUpdateCanvaAgentAction: "{{ CreateAndUpdateCanvaAgentAction }}"
        ShareCanvaAgentAction: "{{ ShareCanvaAgentAction }}"
        UseCanvaAgentAction: "{{ UseCanvaAgentAction }}"
        GithubAction: "{{ GithubAction }}"
        CreateAndUpdateGithubAction: "{{ CreateAndUpdateGithubAction }}"
        ShareGithubAction: "{{ ShareGithubAction }}"
        UseGithubAction: "{{ UseGithubAction }}"
        NotionAction: "{{ NotionAction }}"
        CreateAndUpdateNotionAction: "{{ CreateAndUpdateNotionAction }}"
        ShareNotionAction: "{{ ShareNotionAction }}"
        UseNotionAction: "{{ UseNotionAction }}"
        LinearAction: "{{ LinearAction }}"
        CreateAndUpdateLinearAction: "{{ CreateAndUpdateLinearAction }}"
        ShareLinearAction: "{{ ShareLinearAction }}"
        UseLinearAction: "{{ UseLinearAction }}"
        HuggingFaceAction: "{{ HuggingFaceAction }}"
        CreateAndUpdateHuggingFaceAction: "{{ CreateAndUpdateHuggingFaceAction }}"
        ShareHuggingFaceAction: "{{ ShareHuggingFaceAction }}"
        UseHuggingFaceAction: "{{ UseHuggingFaceAction }}"
        MondayAction: "{{ MondayAction }}"
        CreateAndUpdateMondayAction: "{{ CreateAndUpdateMondayAction }}"
        ShareMondayAction: "{{ ShareMondayAction }}"
        UseMondayAction: "{{ UseMondayAction }}"
        HubspotAction: "{{ HubspotAction }}"
        CreateAndUpdateHubspotAction: "{{ CreateAndUpdateHubspotAction }}"
        ShareHubspotAction: "{{ ShareHubspotAction }}"
        UseHubspotAction: "{{ UseHubspotAction }}"
        IntercomAction: "{{ IntercomAction }}"
        CreateAndUpdateIntercomAction: "{{ CreateAndUpdateIntercomAction }}"
        ShareIntercomAction: "{{ ShareIntercomAction }}"
        UseIntercomAction: "{{ UseIntercomAction }}"
        NewRelicAction: "{{ NewRelicAction }}"
        CreateAndUpdateNewRelicAction: "{{ CreateAndUpdateNewRelicAction }}"
        ShareNewRelicAction: "{{ ShareNewRelicAction }}"
        UseNewRelicAction: "{{ UseNewRelicAction }}"
        Topic: "{{ Topic }}"
        EditVisualWithQ: "{{ EditVisualWithQ }}"
        BuildCalculatedFieldWithQ: "{{ BuildCalculatedFieldWithQ }}"
        CreateDashboardExecutiveSummaryWithQ: "{{ CreateDashboardExecutiveSummaryWithQ }}"
        Space: "{{ Space }}"
        CreateSpaces: "{{ CreateSpaces }}"
        ShareSpaces: "{{ ShareSpaces }}"
        ChatAgent: "{{ ChatAgent }}"
        CreateChatAgents: "{{ CreateChatAgents }}"
        ShareChatAgents: "{{ ShareChatAgents }}"
        Research: "{{ Research }}"
        SelfUpgradeUserRole: "{{ SelfUpgradeUserRole }}"
        Extension: "{{ Extension }}"
        ManageSharedFolders: "{{ ManageSharedFolders }}"
        GenerateAnalyses: "{{ GenerateAnalyses }}"
        Story: "{{ Story }}"
        Scenario: "{{ Scenario }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_user_custom_permission"
    values={[
        { label: 'update_user_custom_permission', value: 'update_user_custom_permission' },
        { label: 'update_custom_permissions', value: 'update_custom_permissions' }
    ]}
>
<TabItem value="update_user_custom_permission">

Updates a custom permissions profile for a user.

```sql
UPDATE aws.quicksight.custom_permissions
SET 
CustomPermissionsName = '{{ CustomPermissionsName }}'
WHERE 
user_name = '{{ user_name }}' --required
AND aws_account_id = '{{ aws_account_id }}' --required
AND namespace = '{{ namespace }}' --required
AND region = '{{ region }}' --required
AND CustomPermissionsName = '{{ CustomPermissionsName }}' --required
RETURNING
RequestId,
Status;
```
</TabItem>
<TabItem value="update_custom_permissions">

Updates a custom permissions profile.

```sql
UPDATE aws.quicksight.custom_permissions
SET 
Capabilities = '{{ Capabilities }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND custom_permissions_name = '{{ custom_permissions_name }}' --required
AND region = '{{ region }}' --required
RETURNING
Arn,
RequestId,
Status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_user_custom_permission"
    values={[
        { label: 'delete_user_custom_permission', value: 'delete_user_custom_permission' },
        { label: 'delete_custom_permissions', value: 'delete_custom_permissions' }
    ]}
>
<TabItem value="delete_user_custom_permission">

Deletes a custom permissions profile from a user.

```sql
DELETE FROM aws.quicksight.custom_permissions
WHERE user_name = '{{ user_name }}' --required
AND aws_account_id = '{{ aws_account_id }}' --required
AND namespace = '{{ namespace }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_custom_permissions">

Deletes a custom permissions profile.

```sql
DELETE FROM aws.quicksight.custom_permissions
WHERE aws_account_id = '{{ aws_account_id }}' --required
AND custom_permissions_name = '{{ custom_permissions_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
