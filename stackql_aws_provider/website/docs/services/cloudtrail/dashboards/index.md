--- 
title: dashboards
hide_title: false
hide_table_of_contents: false
keywords:
  - dashboards
  - cloudtrail
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudtrail.dashboards" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_dashboard"
    values={[
        { label: 'get_dashboard', value: 'get_dashboard' },
        { label: 'list_dashboards', value: 'list_dashboards' }
    ]}
>
<TabItem value="get_dashboard">

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
    <td><CopyableCode code="CreatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp that shows when the dashboard was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DashboardArn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the dashboard. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9._/\-:&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastRefreshFailureReason" /></td>
    <td><code>string</code></td>
    <td>Provides information about failures for the last scheduled refresh. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastRefreshId" /></td>
    <td><code>string</code></td>
    <td>The ID of the last dashboard refresh. (pattern: &lt;code&gt;\d+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RefreshSchedule" /></td>
    <td><code>object</code></td>
    <td>The refresh schedule for the dashboard, if configured.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the dashboard. (CREATING, CREATED, UPDATING, UPDATED, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="TerminationProtectionEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether termination protection is enabled for the dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of dashboard. (MANAGED, CUSTOM)</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp that shows when the dashboard was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="Widgets" /></td>
    <td><code>array</code></td>
    <td>An array of widgets for the dashboard.</td>
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
    <td><CopyableCode code="Dashboards" /></td>
    <td><code>array</code></td>
    <td>Contains information about dashboards in the account, in the current Region that match the applied filters.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token you can use to get the next page of dashboard results. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
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
    <td><a href="#get_dashboard"><CopyableCode code="get_dashboard" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the specified dashboard.</td>
</tr>
<tr>
    <td><a href="#list_dashboards"><CopyableCode code="list_dashboards" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about all dashboards in the account, in the current Region.</td>
</tr>
<tr>
    <td><a href="#create_dashboard"><CopyableCode code="create_dashboard" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a custom dashboard or the Highlights dashboard. Custom dashboards - Custom dashboards allow you to query events in any event data store type. You can add up to 10 widgets to a custom dashboard. You can manually refresh a custom dashboard, or you can set a refresh schedule. Highlights dashboard - You can create the Highlights dashboard to see a summary of key user activities and API usage across all your event data stores. CloudTrail Lake manages the Highlights dashboard and refreshes the dashboard every 6 hours. To create the Highlights dashboard, you must set and enable a refresh schedule. CloudTrail runs queries to populate the dashboard's widgets during a manual or scheduled refresh. CloudTrail must be granted permissions to run the StartQuery operation on your behalf. To provide permissions, run the PutResourcePolicy operation to attach a resource-based policy to each event data store. For more information, see Example: Allow CloudTrail to run queries to populate a dashboard in the CloudTrail User Guide. To set a refresh schedule, CloudTrail must be granted permissions to run the StartDashboardRefresh operation to refresh the dashboard on your behalf. To provide permissions, run the PutResourcePolicy operation to attach a resource-based policy to the dashboard. For more information, see Resource-based policy example for a dashboard in the CloudTrail User Guide. For more information about dashboards, see CloudTrail Lake dashboards in the CloudTrail User Guide.</td>
</tr>
<tr>
    <td><a href="#update_dashboard"><CopyableCode code="update_dashboard" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DashboardId"><code>DashboardId</code></a></td>
    <td></td>
    <td>Updates the specified dashboard. To set a refresh schedule, CloudTrail must be granted permissions to run the StartDashboardRefresh operation to refresh the dashboard on your behalf. To provide permissions, run the PutResourcePolicy operation to attach a resource-based policy to the dashboard. For more information, see Resource-based policy example for a dashboard in the CloudTrail User Guide. CloudTrail runs queries to populate the dashboard's widgets during a manual or scheduled refresh. CloudTrail must be granted permissions to run the StartQuery operation on your behalf. To provide permissions, run the PutResourcePolicy operation to attach a resource-based policy to each event data store. For more information, see Example: Allow CloudTrail to run queries to populate a dashboard in the CloudTrail User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_dashboard"><CopyableCode code="delete_dashboard" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified dashboard. You cannot delete a dashboard that has termination protection enabled.</td>
</tr>
<tr>
    <td><a href="#start_dashboard_refresh"><CopyableCode code="start_dashboard_refresh" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DashboardId"><code>DashboardId</code></a></td>
    <td></td>
    <td>Starts a refresh of the specified dashboard. Each time a dashboard is refreshed, CloudTrail runs queries to populate the dashboard's widgets. CloudTrail must be granted permissions to run the StartQuery operation on your behalf. To provide permissions, run the PutResourcePolicy operation to attach a resource-based policy to each event data store. For more information, see Example: Allow CloudTrail to run queries to populate a dashboard in the CloudTrail User Guide.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_dashboard"
    values={[
        { label: 'get_dashboard', value: 'get_dashboard' },
        { label: 'list_dashboards', value: 'list_dashboards' }
    ]}
>
<TabItem value="get_dashboard">

Returns the specified dashboard.

```sql
SELECT
CreatedTimestamp,
DashboardArn,
LastRefreshFailureReason,
LastRefreshId,
RefreshSchedule,
Status,
TerminationProtectionEnabled,
Type,
UpdatedTimestamp,
Widgets
FROM aws.cloudtrail.dashboards
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_dashboards">

Returns information about all dashboards in the account, in the current Region.

```sql
SELECT
Dashboards,
NextToken
FROM aws.cloudtrail.dashboards
WHERE region = '{{ region }}' -- required
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

Creates a custom dashboard or the Highlights dashboard. Custom dashboards - Custom dashboards allow you to query events in any event data store type. You can add up to 10 widgets to a custom dashboard. You can manually refresh a custom dashboard, or you can set a refresh schedule. Highlights dashboard - You can create the Highlights dashboard to see a summary of key user activities and API usage across all your event data stores. CloudTrail Lake manages the Highlights dashboard and refreshes the dashboard every 6 hours. To create the Highlights dashboard, you must set and enable a refresh schedule. CloudTrail runs queries to populate the dashboard's widgets during a manual or scheduled refresh. CloudTrail must be granted permissions to run the StartQuery operation on your behalf. To provide permissions, run the PutResourcePolicy operation to attach a resource-based policy to each event data store. For more information, see Example: Allow CloudTrail to run queries to populate a dashboard in the CloudTrail User Guide. To set a refresh schedule, CloudTrail must be granted permissions to run the StartDashboardRefresh operation to refresh the dashboard on your behalf. To provide permissions, run the PutResourcePolicy operation to attach a resource-based policy to the dashboard. For more information, see Resource-based policy example for a dashboard in the CloudTrail User Guide. For more information about dashboards, see CloudTrail Lake dashboards in the CloudTrail User Guide.

```sql
INSERT INTO aws.cloudtrail.dashboards (
Name,
RefreshSchedule,
TagsList,
TerminationProtectionEnabled,
Widgets,
region
)
SELECT 
'{{ Name }}',
'{{ RefreshSchedule }}',
'{{ TagsList }}',
{{ TerminationProtectionEnabled }},
'{{ Widgets }}',
'{{ region }}'
RETURNING
DashboardArn,
Name,
RefreshSchedule,
TagsList,
TerminationProtectionEnabled,
Type,
Widgets
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: dashboards
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the dashboards resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the dashboard. The name must be unique to your account. To create the Highlights dashboard, the name must be AWSCloudTrail-Highlights.
    - name: RefreshSchedule
      description: |
        The refresh schedule configuration for the dashboard. To create the Highlights dashboard, you must set a refresh schedule and set the Status to ENABLED. The Unit for the refresh schedule must be HOURS and the Value must be 6.
      value:
        Frequency:
          Unit: "{{ Unit }}"
          Value: {{ Value }}
        Status: "{{ Status }}"
        TimeOfDay: "{{ TimeOfDay }}"
    - name: TagsList
      description: |
        A list of tags.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: TerminationProtectionEnabled
      value: {{ TerminationProtectionEnabled }}
      description: |
        Specifies whether termination protection is enabled for the dashboard. If termination protection is enabled, you cannot delete the dashboard until termination protection is disabled.
    - name: Widgets
      description: |
        An array of widgets for a custom dashboard. A custom dashboard can have a maximum of ten widgets. You do not need to specify widgets for the Highlights dashboard.
      value:
        - QueryStatement: "{{ QueryStatement }}"
          QueryParameters: "{{ QueryParameters }}"
          ViewProperties: "{{ ViewProperties }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_dashboard"
    values={[
        { label: 'update_dashboard', value: 'update_dashboard' }
    ]}
>
<TabItem value="update_dashboard">

Updates the specified dashboard. To set a refresh schedule, CloudTrail must be granted permissions to run the StartDashboardRefresh operation to refresh the dashboard on your behalf. To provide permissions, run the PutResourcePolicy operation to attach a resource-based policy to the dashboard. For more information, see Resource-based policy example for a dashboard in the CloudTrail User Guide. CloudTrail runs queries to populate the dashboard's widgets during a manual or scheduled refresh. CloudTrail must be granted permissions to run the StartQuery operation on your behalf. To provide permissions, run the PutResourcePolicy operation to attach a resource-based policy to each event data store. For more information, see Example: Allow CloudTrail to run queries to populate a dashboard in the CloudTrail User Guide.

```sql
UPDATE aws.cloudtrail.dashboards
SET 
DashboardId = '{{ DashboardId }}',
Widgets = '{{ Widgets }}',
RefreshSchedule = '{{ RefreshSchedule }}',
TerminationProtectionEnabled = {{ TerminationProtectionEnabled }}
WHERE 
region = '{{ region }}' --required
AND DashboardId = '{{ DashboardId }}' --required
RETURNING
CreatedTimestamp,
DashboardArn,
Name,
RefreshSchedule,
TerminationProtectionEnabled,
Type,
UpdatedTimestamp,
Widgets;
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

Deletes the specified dashboard. You cannot delete a dashboard that has termination protection enabled.

```sql
DELETE FROM aws.cloudtrail.dashboards
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_dashboard_refresh"
    values={[
        { label: 'start_dashboard_refresh', value: 'start_dashboard_refresh' }
    ]}
>
<TabItem value="start_dashboard_refresh">

Starts a refresh of the specified dashboard. Each time a dashboard is refreshed, CloudTrail runs queries to populate the dashboard's widgets. CloudTrail must be granted permissions to run the StartQuery operation on your behalf. To provide permissions, run the PutResourcePolicy operation to attach a resource-based policy to each event data store. For more information, see Example: Allow CloudTrail to run queries to populate a dashboard in the CloudTrail User Guide.

```sql
EXEC aws.cloudtrail.dashboards.start_dashboard_refresh 
@region='{{ region }}' --required 
@@json=
'{
"DashboardId": "{{ DashboardId }}", 
"QueryParameterValues": "{{ QueryParameterValues }}"
}'
;
```
</TabItem>
</Tabs>
