--- 
title: dashboards
hide_title: false
hide_table_of_contents: false
keywords:
  - dashboards
  - cloudwatch
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudwatch.dashboards" /></td></tr>
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
    <td><CopyableCode code="DashboardArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="DashboardBody" /></td>
    <td><code>string</code></td>
    <td>The detailed information about the dashboard, including what widgets are included and their location on the dashboard. For more information about the DashboardBody syntax, see Dashboard Body Structure and Syntax.</td>
</tr>
<tr>
    <td><CopyableCode code="DashboardName" /></td>
    <td><code>string</code></td>
    <td>The name of the dashboard.</td>
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
    <td><CopyableCode code="DashboardArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="DashboardName" /></td>
    <td><code>string</code></td>
    <td>The name of the dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time stamp of when the dashboard was last modified, either by an API call or through the console. This number is expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="Size" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of the dashboard, in bytes.</td>
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
    <td>Displays the details of the dashboard that you specify. To copy an existing dashboard, use GetDashboard, and then use the data returned within DashboardBody as the template for the new dashboard when you call PutDashboard to create the copy.</td>
</tr>
<tr>
    <td><a href="#list_dashboards"><CopyableCode code="list_dashboards" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of the dashboards for your account. If you include DashboardNamePrefix, only those dashboards with names starting with the prefix are listed. Otherwise, all dashboards in your account are listed. ListDashboards returns up to 1000 results on one page. If there are more than 1000 dashboards, you can call ListDashboards again and include the value you received for NextToken in the first call, to receive the next 1000 results.</td>
</tr>
<tr>
    <td><a href="#put_dashboard"><CopyableCode code="put_dashboard" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DashboardName"><code>DashboardName</code></a>, <a href="#parameter-DashboardBody"><code>DashboardBody</code></a></td>
    <td></td>
    <td>Creates a dashboard if it does not already exist, or updates an existing dashboard. If you update a dashboard, the entire contents are replaced with what you specify here. All dashboards in your account are global, not region-specific. A simple way to create a dashboard using PutDashboard is to copy an existing dashboard. To copy an existing dashboard using the console, you can load the dashboard and then use the View/edit source command in the Actions menu to display the JSON block for that dashboard. Another way to copy a dashboard is to use GetDashboard, and then use the data returned within DashboardBody as the template for the new dashboard when you call PutDashboard. When you create a dashboard with PutDashboard, a good practice is to add a text widget at the top of the dashboard with a message that the dashboard was created by script and should not be changed in the console. This message could also point console users to the location of the DashboardBody script or the CloudFormation template used to create the dashboard.</td>
</tr>
<tr>
    <td><a href="#delete_dashboards"><CopyableCode code="delete_dashboards" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes all dashboards that you specify. You can specify up to 100 dashboards to delete. If there is an error during this call, the operation attempts to delete as many dashboards as possible.</td>
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

Displays the details of the dashboard that you specify. To copy an existing dashboard, use GetDashboard, and then use the data returned within DashboardBody as the template for the new dashboard when you call PutDashboard to create the copy.

```sql
SELECT
DashboardArn,
DashboardBody,
DashboardName
FROM aws.cloudwatch.dashboards
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_dashboards">

Returns a list of the dashboards for your account. If you include DashboardNamePrefix, only those dashboards with names starting with the prefix are listed. Otherwise, all dashboards in your account are listed. ListDashboards returns up to 1000 results on one page. If there are more than 1000 dashboards, you can call ListDashboards again and include the value you received for NextToken in the first call, to receive the next 1000 results.

```sql
SELECT
DashboardArn,
DashboardName,
LastModified,
Size
FROM aws.cloudwatch.dashboards
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_dashboard"
    values={[
        { label: 'put_dashboard', value: 'put_dashboard' }
    ]}
>
<TabItem value="put_dashboard">

Creates a dashboard if it does not already exist, or updates an existing dashboard. If you update a dashboard, the entire contents are replaced with what you specify here. All dashboards in your account are global, not region-specific. A simple way to create a dashboard using PutDashboard is to copy an existing dashboard. To copy an existing dashboard using the console, you can load the dashboard and then use the View/edit source command in the Actions menu to display the JSON block for that dashboard. Another way to copy a dashboard is to use GetDashboard, and then use the data returned within DashboardBody as the template for the new dashboard when you call PutDashboard. When you create a dashboard with PutDashboard, a good practice is to add a text widget at the top of the dashboard with a message that the dashboard was created by script and should not be changed in the console. This message could also point console users to the location of the DashboardBody script or the CloudFormation template used to create the dashboard.

```sql
REPLACE aws.cloudwatch.dashboards
SET 
DashboardName = '{{ DashboardName }}',
DashboardBody = '{{ DashboardBody }}',
Tags = '{{ Tags }}'
WHERE 
region = '{{ region }}' --required
AND DashboardName = '{{ DashboardName }}' --required
AND DashboardBody = '{{ DashboardBody }}' --required
RETURNING
DashboardValidationMessages;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_dashboards"
    values={[
        { label: 'delete_dashboards', value: 'delete_dashboards' }
    ]}
>
<TabItem value="delete_dashboards">

Deletes all dashboards that you specify. You can specify up to 100 dashboards to delete. If there is an error during this call, the operation attempts to delete as many dashboards as possible.

```sql
DELETE FROM aws.cloudwatch.dashboards
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
