--- 
title: dashboards
hide_title: false
hide_table_of_contents: false
keywords:
  - dashboards
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

Creates, updates, deletes, gets or lists a <code>dashboards</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dashboards" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.dashboards" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_dashboard"
    values={[
        { label: 'describe_dashboard', value: 'describe_dashboard' },
        { label: 'search_dashboards', value: 'search_dashboards' },
        { label: 'list_dashboards', value: 'list_dashboards' }
    ]}
>
<TabItem value="describe_dashboard">

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
    <td><CopyableCode code="Dashboard" /></td>
    <td><code>object</code></td>
    <td>Information about the dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of this request.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_dashboards">

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
    <td>The Amazon Resource Name (ARN) of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that this dashboard was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DashboardId" /></td>
    <td><code>string</code></td>
    <td>Dashboard ID. (pattern: &lt;code&gt;&#91;\w\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastPublishedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time that this dashboard was published.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time that this dashboard was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>A display name for the dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="PublishedVersionNumber" /></td>
    <td><code>integer (int64)</code></td>
    <td>Published version number.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_dashboards">

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
    <td>The Amazon Resource Name (ARN) of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that this dashboard was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DashboardId" /></td>
    <td><code>string</code></td>
    <td>Dashboard ID. (pattern: &lt;code&gt;&#91;\w\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastPublishedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time that this dashboard was published.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time that this dashboard was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>A display name for the dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="PublishedVersionNumber" /></td>
    <td><code>integer (int64)</code></td>
    <td>Published version number.</td>
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
    <td><a href="#describe_dashboard"><CopyableCode code="describe_dashboard" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-dashboard_id"><code>dashboard_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-version-number"><code>version-number</code></a>, <a href="#parameter-alias-name"><code>alias-name</code></a></td>
    <td>Provides a summary for a dashboard.</td>
</tr>
<tr>
    <td><a href="#search_dashboards"><CopyableCode code="search_dashboards" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches for dashboards that belong to a user. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</td>
</tr>
<tr>
    <td><a href="#list_dashboards"><CopyableCode code="list_dashboards" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists dashboards in an Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_dashboard"><CopyableCode code="create_dashboard" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-dashboard_id"><code>dashboard_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a dashboard from either a template or directly with a DashboardDefinition. To first create a template, see the CreateTemplate API operation. A dashboard is an entity in Amazon Quick Sight that identifies Amazon Quick Sight reports, created from analyses. You can share Amazon Quick Sight dashboards. With the right permissions, you can create scheduled email reports from them. If you have the correct permissions, you can create a dashboard from a template that exists in a different Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#update_dashboard_links"><CopyableCode code="update_dashboard_links" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-dashboard_id"><code>dashboard_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LinkEntities"><code>LinkEntities</code></a></td>
    <td></td>
    <td>Updates the linked analyses on a dashboard.</td>
</tr>
<tr>
    <td><a href="#update_dashboard_published_version"><CopyableCode code="update_dashboard_published_version" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-dashboard_id"><code>dashboard_id</code></a>, <a href="#parameter-version_number"><code>version_number</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the published version of a dashboard.</td>
</tr>
<tr>
    <td><a href="#update_dashboard"><CopyableCode code="update_dashboard" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-dashboard_id"><code>dashboard_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a dashboard in an Amazon Web Services account. Updating a Dashboard creates a new dashboard version but does not immediately publish the new version. You can update the published version of a dashboard by using the UpdateDashboardPublishedVersion API operation.</td>
</tr>
<tr>
    <td><a href="#delete_dashboard"><CopyableCode code="delete_dashboard" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-dashboard_id"><code>dashboard_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-version-number"><code>version-number</code></a></td>
    <td>Deletes a dashboard.</td>
</tr>
<tr>
    <td><a href="#start_dashboard_snapshot_job"><CopyableCode code="start_dashboard_snapshot_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-dashboard_id"><code>dashboard_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SnapshotJobId"><code>SnapshotJobId</code></a>, <a href="#parameter-SnapshotConfiguration"><code>SnapshotConfiguration</code></a></td>
    <td></td>
    <td>Starts an asynchronous job that generates a snapshot of a dashboard's output. You can request one or several of the following format configurations in each API call. 1 PDF 1 Excel workbook that includes up to 5 table or pivot table visuals 5 CSVs from table or pivot table visuals Exporting CSV, Excel, or Pixel Perfect PDF reports requires Pixel Perfect Report Add-on. The status of a submitted job can be polled with the DescribeDashboardSnapshotJob API. When you call the DescribeDashboardSnapshotJob API, check the JobStatus field in the response. Once the job reaches a COMPLETED or FAILED status, use the DescribeDashboardSnapshotJobResult API to obtain the URLs for the generated files. If the job fails, the DescribeDashboardSnapshotJobResult API returns detailed information about the error that occurred. StartDashboardSnapshotJob API throttling Quick Sight utilizes API throttling to create a more consistent user experience within a time span for customers when they call the StartDashboardSnapshotJob. By default, 12 jobs can run simlutaneously in one Amazon Web Services account and users can submit up 10 API requests per second before an account is throttled. If an overwhelming number of API requests are made by the same user in a short period of time, Quick Sight throttles the API calls to maintin an optimal experience and reliability for all Quick Sight users. Common throttling scenarios The following list provides information about the most commin throttling scenarios that can occur. A large number of SnapshotExport API jobs are running simultaneously on an Amazon Web Services account. When a new StartDashboardSnapshotJob is created and there are already 12 jobs with the RUNNING status, the new job request fails and returns a LimitExceededException error. Wait for a current job to comlpete before you resubmit the new job. A large number of API requests are submitted on an Amazon Web Services account. When a user makes more than 10 API calls to the Quick Sight API in one second, a ThrottlingException is returned. If your use case requires a higher throttling limit, contact your account admin or Amazon Web ServicesSupport to explore options to tailor a more optimal expereince for your account. Best practices to handle throttling If your use case projects high levels of API traffic, try to reduce the degree of frequency and parallelism of API calls as much as you can to avoid throttling. You can also perform a timing test to calculate an estimate for the total processing time of your projected load that stays within the throttling limits of the Quick Sight APIs. For example, if your projected traffic is 100 snapshot jobs before 12:00 PM per day, start 12 jobs in parallel and measure the amount of time it takes to proccess all 12 jobs. Once you obtain the result, multiply the duration by 9, for example (12 minutes * 9 = 108 minutes). Use the new result to determine the latest time at which the jobs need to be started to meet your target deadline. The time that it takes to process a job can be impacted by the following factors: The dataset type (Direct Query or SPICE). The size of the dataset. The complexity of the calculated fields that are used in the dashboard. The number of visuals that are on a sheet. The types of visuals that are on the sheet. The number of formats and snapshots that are requested in the job configuration. The size of the generated snapshots. Registered user support You can generate snapshots for registered Quick Sight users by using the Snapshot Job APIs with identity-enhanced IAM role session credentials. This approach allows you to create snapshots on behalf of specific Quick Sight users while respecting their row-level security (RLS), column-level security (CLS), dynamic default parameters and dashboard parameter/filter settings. To generate snapshots for registered Quick Sight users, you need to: Obtain identity-enhanced IAM role session credentials from Amazon Web Services Security Token Service (STS). Use these credentials to call the Snapshot Job APIs. Identity-enhanced credentials are credentials that contain information about the end user (e.g., registered Quick Sight user). If your Quick Sight users are backed by Amazon Web Services Identity Center, then you need to set up a trusted token issuer. Then, getting identity-enhanced IAM credentials for a Quick Sight user will look like the following: Authenticate user with your OIDC compliant Identity Provider. You should get auth tokens back. Use the OIDC API, CreateTokenWithIAM, to exchange auth tokens to IAM tokens. One of the resulted tokens will be identity token. Call STS AssumeRole API as you normally would, but provide an extra ProvidedContexts parameter in the API request. The list of contexts must have a single trusted context assertion. The ProviderArn should be arn:aws:iam::aws:contextProvider/IdentityCenter while ContextAssertion will be the identity token you received in response from CreateTokenWithIAM For more details, see IdC documentation on Identity-enhanced IAM role sessions. To obtain Identity-enhanced credentials for Quick Sight native users, IAM federated users, or Active Directory users, follow the steps below: Call Quick Sight GetIdentityContext API to get identity token. Call STS AssumeRole API as you normally would, but provide extra ProvidedContexts parameter in the API request. The list of contexts must have a single trusted context assertion. The ProviderArn should be arn:aws:iam::aws:contextProvider/QuickSight while ContextAssertion will be the identity token you received in response from GetIdentityContext After obtaining the identity-enhanced IAM role session credentials, you can use them to start a job, describe the job and describe job result. You can use the same credentials as long as they haven't expired. All API requests made with these credentials are considered to be made by the impersonated Quick Sight user. When using identity-enhanced session credentials, set the UserConfiguration request attribute to null. Otherwise, the request will be invalid. Possible error scenarios The request fails with an Access Denied error in the following scenarios: The credentials have expired. The impersonated Quick Sight user doesn't have access to the specified dashboard. The impersonated Quick Sight user is restricted from exporting data in the selected formats. For more information about export restrictions, see Customizing access to Amazon Quick Sight capabilities.</td>
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
    <td>The ID of the Amazon Web Services account that the dashboard snapshot job is executed in.</td>
</tr>
<tr id="parameter-dashboard_id">
    <td><CopyableCode code="dashboard_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the dashboard that you want to start a snapshot job for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-version_number">
    <td><CopyableCode code="version_number" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number of the dashboard.</td>
</tr>
<tr id="parameter-alias-name">
    <td><CopyableCode code="alias-name" /></td>
    <td><code>string</code></td>
    <td>The alias name.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned per request.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null if there are no more results.</td>
</tr>
<tr id="parameter-version-number">
    <td><CopyableCode code="version-number" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number of the dashboard. If the version number property is provided, only the specified version of the dashboard is deleted.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_dashboard"
    values={[
        { label: 'describe_dashboard', value: 'describe_dashboard' },
        { label: 'search_dashboards', value: 'search_dashboards' },
        { label: 'list_dashboards', value: 'list_dashboards' }
    ]}
>
<TabItem value="describe_dashboard">

Provides a summary for a dashboard.

```sql
SELECT
Dashboard,
RequestId,
Status
FROM aws.quicksight.dashboards
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND dashboard_id = '{{ dashboard_id }}' -- required
AND region = '{{ region }}' -- required
AND `version-number` = '{{ version-number }}'
AND `alias-name` = '{{ alias-name }}'
;
```
</TabItem>
<TabItem value="search_dashboards">

Searches for dashboards that belong to a user. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.

```sql
SELECT
Arn,
CreatedTime,
DashboardId,
LastPublishedTime,
LastUpdatedTime,
Name,
PublishedVersionNumber
FROM aws.quicksight.dashboards
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_dashboards">

Lists dashboards in an Amazon Web Services account.

```sql
SELECT
Arn,
CreatedTime,
DashboardId,
LastPublishedTime,
LastUpdatedTime,
Name,
PublishedVersionNumber
FROM aws.quicksight.dashboards
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_dashboard"
    values={[
        { label: 'create_dashboard', value: 'create_dashboard' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_dashboard">

Creates a dashboard from either a template or directly with a DashboardDefinition. To first create a template, see the CreateTemplate API operation. A dashboard is an entity in Amazon Quick Sight that identifies Amazon Quick Sight reports, created from analyses. You can share Amazon Quick Sight dashboards. With the right permissions, you can create scheduled email reports from them. If you have the correct permissions, you can create a dashboard from a template that exists in a different Amazon Web Services account.

```sql
INSERT INTO aws.quicksight.dashboards (
Name,
Parameters,
Permissions,
SourceEntity,
Tags,
VersionDescription,
DashboardPublishOptions,
ThemeArn,
Definition,
ValidationStrategy,
FolderArns,
LinkSharingConfiguration,
LinkEntities,
aws_account_id,
dashboard_id,
region
)
SELECT 
'{{ Name }}',
'{{ Parameters }}',
'{{ Permissions }}',
'{{ SourceEntity }}',
'{{ Tags }}',
'{{ VersionDescription }}',
'{{ DashboardPublishOptions }}',
'{{ ThemeArn }}',
'{{ Definition }}',
'{{ ValidationStrategy }}',
'{{ FolderArns }}',
'{{ LinkSharingConfiguration }}',
'{{ LinkEntities }}',
'{{ aws_account_id }}',
'{{ dashboard_id }}',
'{{ region }}'
RETURNING
Arn,
CreationStatus,
DashboardId,
RequestId,
Status,
VersionArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: dashboards
  props:
    - name: aws_account_id
      value: "{{ aws_account_id }}"
      description: Required parameter for the dashboards resource.
    - name: dashboard_id
      value: "{{ dashboard_id }}"
      description: Required parameter for the dashboards resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the dashboards resource.
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
        Dashboard source entity.
      value:
        SourceTemplate:
          DataSetReferences:
            - DataSetPlaceholder: "{{ DataSetPlaceholder }}"
              DataSetArn: "{{ DataSetArn }}"
          Arn: "{{ Arn }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: VersionDescription
      value: "{{ VersionDescription }}"
    - name: DashboardPublishOptions
      description: |
        Dashboard publish options.
      value:
        AdHocFilteringOption:
          AvailabilityStatus: "{{ AvailabilityStatus }}"
        ExportToCSVOption:
          AvailabilityStatus: "{{ AvailabilityStatus }}"
        SheetControlsOption:
          VisibilityState: "{{ VisibilityState }}"
        VisualPublishOptions:
          ExportHiddenFieldsOption:
            AvailabilityStatus: "{{ AvailabilityStatus }}"
        SheetLayoutElementMaximizationOption:
          AvailabilityStatus: "{{ AvailabilityStatus }}"
        VisualMenuOption:
          AvailabilityStatus: "{{ AvailabilityStatus }}"
        VisualAxisSortOption:
          AvailabilityStatus: "{{ AvailabilityStatus }}"
        ExportWithHiddenFieldsOption:
          AvailabilityStatus: "{{ AvailabilityStatus }}"
        DataPointDrillUpDownOption:
          AvailabilityStatus: "{{ AvailabilityStatus }}"
        DataPointMenuLabelOption:
          AvailabilityStatus: "{{ AvailabilityStatus }}"
        DataPointTooltipOption:
          AvailabilityStatus: "{{ AvailabilityStatus }}"
        DataQAEnabledOption:
          AvailabilityStatus: "{{ AvailabilityStatus }}"
        QuickSuiteActionsOption:
          AvailabilityStatus: "{{ AvailabilityStatus }}"
        ExecutiveSummaryOption:
          AvailabilityStatus: "{{ AvailabilityStatus }}"
        DataStoriesSharingOption:
          AvailabilityStatus: "{{ AvailabilityStatus }}"
    - name: ThemeArn
      value: "{{ ThemeArn }}"
    - name: Definition
      description: |
        The contents of a dashboard.
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
    - name: LinkSharingConfiguration
      description: |
        A structure that contains the configuration of a shareable link to the dashboard.
      value:
        Permissions:
          - Principal: "{{ Principal }}"
            Actions: "{{ Actions }}"
    - name: LinkEntities
      value:
        - "{{ LinkEntities }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_dashboard_links"
    values={[
        { label: 'update_dashboard_links', value: 'update_dashboard_links' },
        { label: 'update_dashboard_published_version', value: 'update_dashboard_published_version' },
        { label: 'update_dashboard', value: 'update_dashboard' }
    ]}
>
<TabItem value="update_dashboard_links">

Updates the linked analyses on a dashboard.

```sql
UPDATE aws.quicksight.dashboards
SET 
LinkEntities = '{{ LinkEntities }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND dashboard_id = '{{ dashboard_id }}' --required
AND region = '{{ region }}' --required
AND LinkEntities = '{{ LinkEntities }}' --required
RETURNING
DashboardArn,
LinkEntities,
RequestId,
Status;
```
</TabItem>
<TabItem value="update_dashboard_published_version">

Updates the published version of a dashboard.

```sql
UPDATE aws.quicksight.dashboards
SET 
-- No updatable properties
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND dashboard_id = '{{ dashboard_id }}' --required
AND version_number = '{{ version_number }}' --required
AND region = '{{ region }}' --required
RETURNING
DashboardArn,
DashboardId,
RequestId,
Status;
```
</TabItem>
<TabItem value="update_dashboard">

Updates a dashboard in an Amazon Web Services account. Updating a Dashboard creates a new dashboard version but does not immediately publish the new version. You can update the published version of a dashboard by using the UpdateDashboardPublishedVersion API operation.

```sql
UPDATE aws.quicksight.dashboards
SET 
Name = '{{ Name }}',
SourceEntity = '{{ SourceEntity }}',
Parameters = '{{ Parameters }}',
VersionDescription = '{{ VersionDescription }}',
DashboardPublishOptions = '{{ DashboardPublishOptions }}',
ThemeArn = '{{ ThemeArn }}',
Definition = '{{ Definition }}',
ValidationStrategy = '{{ ValidationStrategy }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND dashboard_id = '{{ dashboard_id }}' --required
AND region = '{{ region }}' --required
RETURNING
Arn,
CreationStatus,
DashboardId,
RequestId,
Status,
VersionArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_dashboard"
    values={[
        { label: 'delete_dashboard', value: 'delete_dashboard' }
    ]}
>
<TabItem value="delete_dashboard">

Deletes a dashboard.

```sql
DELETE FROM aws.quicksight.dashboards
WHERE aws_account_id = '{{ aws_account_id }}' --required
AND dashboard_id = '{{ dashboard_id }}' --required
AND region = '{{ region }}' --required
AND `version-number` = '{{ version-number }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_dashboard_snapshot_job"
    values={[
        { label: 'start_dashboard_snapshot_job', value: 'start_dashboard_snapshot_job' }
    ]}
>
<TabItem value="start_dashboard_snapshot_job">

Starts an asynchronous job that generates a snapshot of a dashboard's output. You can request one or several of the following format configurations in each API call. 1 PDF 1 Excel workbook that includes up to 5 table or pivot table visuals 5 CSVs from table or pivot table visuals Exporting CSV, Excel, or Pixel Perfect PDF reports requires Pixel Perfect Report Add-on. The status of a submitted job can be polled with the DescribeDashboardSnapshotJob API. When you call the DescribeDashboardSnapshotJob API, check the JobStatus field in the response. Once the job reaches a COMPLETED or FAILED status, use the DescribeDashboardSnapshotJobResult API to obtain the URLs for the generated files. If the job fails, the DescribeDashboardSnapshotJobResult API returns detailed information about the error that occurred. StartDashboardSnapshotJob API throttling Quick Sight utilizes API throttling to create a more consistent user experience within a time span for customers when they call the StartDashboardSnapshotJob. By default, 12 jobs can run simlutaneously in one Amazon Web Services account and users can submit up 10 API requests per second before an account is throttled. If an overwhelming number of API requests are made by the same user in a short period of time, Quick Sight throttles the API calls to maintin an optimal experience and reliability for all Quick Sight users. Common throttling scenarios The following list provides information about the most commin throttling scenarios that can occur. A large number of SnapshotExport API jobs are running simultaneously on an Amazon Web Services account. When a new StartDashboardSnapshotJob is created and there are already 12 jobs with the RUNNING status, the new job request fails and returns a LimitExceededException error. Wait for a current job to comlpete before you resubmit the new job. A large number of API requests are submitted on an Amazon Web Services account. When a user makes more than 10 API calls to the Quick Sight API in one second, a ThrottlingException is returned. If your use case requires a higher throttling limit, contact your account admin or Amazon Web ServicesSupport to explore options to tailor a more optimal expereince for your account. Best practices to handle throttling If your use case projects high levels of API traffic, try to reduce the degree of frequency and parallelism of API calls as much as you can to avoid throttling. You can also perform a timing test to calculate an estimate for the total processing time of your projected load that stays within the throttling limits of the Quick Sight APIs. For example, if your projected traffic is 100 snapshot jobs before 12:00 PM per day, start 12 jobs in parallel and measure the amount of time it takes to proccess all 12 jobs. Once you obtain the result, multiply the duration by 9, for example (12 minutes * 9 = 108 minutes). Use the new result to determine the latest time at which the jobs need to be started to meet your target deadline. The time that it takes to process a job can be impacted by the following factors: The dataset type (Direct Query or SPICE). The size of the dataset. The complexity of the calculated fields that are used in the dashboard. The number of visuals that are on a sheet. The types of visuals that are on the sheet. The number of formats and snapshots that are requested in the job configuration. The size of the generated snapshots. Registered user support You can generate snapshots for registered Quick Sight users by using the Snapshot Job APIs with identity-enhanced IAM role session credentials. This approach allows you to create snapshots on behalf of specific Quick Sight users while respecting their row-level security (RLS), column-level security (CLS), dynamic default parameters and dashboard parameter/filter settings. To generate snapshots for registered Quick Sight users, you need to: Obtain identity-enhanced IAM role session credentials from Amazon Web Services Security Token Service (STS). Use these credentials to call the Snapshot Job APIs. Identity-enhanced credentials are credentials that contain information about the end user (e.g., registered Quick Sight user). If your Quick Sight users are backed by Amazon Web Services Identity Center, then you need to set up a trusted token issuer. Then, getting identity-enhanced IAM credentials for a Quick Sight user will look like the following: Authenticate user with your OIDC compliant Identity Provider. You should get auth tokens back. Use the OIDC API, CreateTokenWithIAM, to exchange auth tokens to IAM tokens. One of the resulted tokens will be identity token. Call STS AssumeRole API as you normally would, but provide an extra ProvidedContexts parameter in the API request. The list of contexts must have a single trusted context assertion. The ProviderArn should be arn:aws:iam::aws:contextProvider/IdentityCenter while ContextAssertion will be the identity token you received in response from CreateTokenWithIAM For more details, see IdC documentation on Identity-enhanced IAM role sessions. To obtain Identity-enhanced credentials for Quick Sight native users, IAM federated users, or Active Directory users, follow the steps below: Call Quick Sight GetIdentityContext API to get identity token. Call STS AssumeRole API as you normally would, but provide extra ProvidedContexts parameter in the API request. The list of contexts must have a single trusted context assertion. The ProviderArn should be arn:aws:iam::aws:contextProvider/QuickSight while ContextAssertion will be the identity token you received in response from GetIdentityContext After obtaining the identity-enhanced IAM role session credentials, you can use them to start a job, describe the job and describe job result. You can use the same credentials as long as they haven't expired. All API requests made with these credentials are considered to be made by the impersonated Quick Sight user. When using identity-enhanced session credentials, set the UserConfiguration request attribute to null. Otherwise, the request will be invalid. Possible error scenarios The request fails with an Access Denied error in the following scenarios: The credentials have expired. The impersonated Quick Sight user doesn't have access to the specified dashboard. The impersonated Quick Sight user is restricted from exporting data in the selected formats. For more information about export restrictions, see Customizing access to Amazon Quick Sight capabilities.

```sql
EXEC aws.quicksight.dashboards.start_dashboard_snapshot_job 
@aws_account_id='{{ aws_account_id }}' --required, 
@dashboard_id='{{ dashboard_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"SnapshotJobId": "{{ SnapshotJobId }}", 
"UserConfiguration": "{{ UserConfiguration }}", 
"SnapshotConfiguration": "{{ SnapshotConfiguration }}"
}'
;
```
</TabItem>
</Tabs>
