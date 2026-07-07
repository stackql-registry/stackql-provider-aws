--- 
title: dashboards
hide_title: false
hide_table_of_contents: false
keywords:
  - dashboards
  - iotsitewise
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.dashboards" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_dashboards"
    values={[
        { label: 'list_dashboards', value: 'list_dashboards' },
        { label: 'describe_dashboard', value: 'describe_dashboard' }
    ]}
>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the dashboard. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the dashboard (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the dashboard was created, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The dashboard's description. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdateDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the dashboard was last updated, in Unix epoch time.</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><CopyableCode code="dashboardArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the dashboard, which has the following format. arn:$&#123;Partition&#125;:iotsitewise:$&#123;Region&#125;:$&#123;Account&#125;:dashboard/$&#123;DashboardId&#125; (pattern: &lt;code&gt;^arn:aws(-cn|-us-gov)?:&#91;a-zA-Z0-9-:\/_\.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dashboardCreationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the dashboard was created, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="dashboardDefinition" /></td>
    <td><code>string</code></td>
    <td>The dashboard's definition JSON literal. For detailed information, see Creating dashboards (CLI) in the IoT SiteWise User Guide. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dashboardDescription" /></td>
    <td><code>string</code></td>
    <td>The dashboard's description. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dashboardId" /></td>
    <td><code>string</code></td>
    <td>The ID of the dashboard. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dashboardLastUpdateDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the dashboard was last updated, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="dashboardName" /></td>
    <td><code>string</code></td>
    <td>The name of the dashboard. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>The ID of the project that the dashboard is in. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#list_dashboards"><CopyableCode code="list_dashboards" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a paginated list of dashboards for an IoT SiteWise Monitor project.</td>
</tr>
<tr>
    <td><a href="#describe_dashboard"><CopyableCode code="describe_dashboard" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-dashboard_id"><code>dashboard_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a dashboard.</td>
</tr>
<tr>
    <td><a href="#create_dashboard"><CopyableCode code="create_dashboard" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-dashboardName"><code>dashboardName</code></a>, <a href="#parameter-dashboardDefinition"><code>dashboardDefinition</code></a></td>
    <td></td>
    <td>Creates a dashboard in an IoT SiteWise Monitor project.</td>
</tr>
<tr>
    <td><a href="#update_dashboard"><CopyableCode code="update_dashboard" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-dashboard_id"><code>dashboard_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-dashboardName"><code>dashboardName</code></a>, <a href="#parameter-dashboardDefinition"><code>dashboardDefinition</code></a></td>
    <td></td>
    <td>Updates an IoT SiteWise Monitor dashboard.</td>
</tr>
<tr>
    <td><a href="#delete_dashboard"><CopyableCode code="delete_dashboard" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-dashboard_id"><code>dashboard_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes a dashboard from IoT SiteWise Monitor.</td>
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
<tr id="parameter-dashboard_id">
    <td><CopyableCode code="dashboard_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the dashboard to delete.</td>
</tr>
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>The ID of the project.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for each paginated request. Default: 50</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to be used for the next set of paginated results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_dashboards"
    values={[
        { label: 'list_dashboards', value: 'list_dashboards' },
        { label: 'describe_dashboard', value: 'describe_dashboard' }
    ]}
>
<TabItem value="list_dashboards">

Retrieves a paginated list of dashboards for an IoT SiteWise Monitor project.

```sql
SELECT
id,
name,
creationDate,
description,
lastUpdateDate
FROM aws.iotsitewise.dashboards
WHERE projectId = '{{ projectId }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
<TabItem value="describe_dashboard">

Retrieves information about a dashboard.

```sql
SELECT
dashboardArn,
dashboardCreationDate,
dashboardDefinition,
dashboardDescription,
dashboardId,
dashboardLastUpdateDate,
dashboardName,
projectId
FROM aws.iotsitewise.dashboards
WHERE dashboard_id = '{{ dashboard_id }}' -- required
AND region = '{{ region }}' -- required
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

Creates a dashboard in an IoT SiteWise Monitor project.

```sql
INSERT INTO aws.iotsitewise.dashboards (
projectId,
dashboardName,
dashboardDescription,
dashboardDefinition,
clientToken,
tags,
region
)
SELECT 
'{{ projectId }}' /* required */,
'{{ dashboardName }}' /* required */,
'{{ dashboardDescription }}',
'{{ dashboardDefinition }}' /* required */,
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
dashboardArn,
dashboardId
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
    - name: projectId
      value: "{{ projectId }}"
    - name: dashboardName
      value: "{{ dashboardName }}"
    - name: dashboardDescription
      value: "{{ dashboardDescription }}"
    - name: dashboardDefinition
      value: "{{ dashboardDefinition }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value: "{{ tags }}"
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

Updates an IoT SiteWise Monitor dashboard.

```sql
UPDATE aws.iotsitewise.dashboards
SET 
dashboardName = '{{ dashboardName }}',
dashboardDescription = '{{ dashboardDescription }}',
dashboardDefinition = '{{ dashboardDefinition }}',
clientToken = '{{ clientToken }}'
WHERE 
dashboard_id = '{{ dashboard_id }}' --required
AND region = '{{ region }}' --required
AND dashboardName = '{{ dashboardName }}' --required
AND dashboardDefinition = '{{ dashboardDefinition }}' --required;
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

Deletes a dashboard from IoT SiteWise Monitor.

```sql
DELETE FROM aws.iotsitewise.dashboards
WHERE dashboard_id = '{{ dashboard_id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>
