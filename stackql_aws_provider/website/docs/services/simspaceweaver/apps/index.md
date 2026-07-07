--- 
title: apps
hide_title: false
hide_table_of_contents: false
keywords:
  - apps
  - simspaceweaver
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

Creates, updates, deletes, gets or lists an <code>apps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="apps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.simspaceweaver.apps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_app"
    values={[
        { label: 'describe_app', value: 'describe_app' },
        { label: 'list_apps', value: 'list_apps' }
    ]}
>
<TabItem value="describe_app">

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
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the app.</td>
</tr>
<tr>
    <td><CopyableCode code="Domain" /></td>
    <td><code>string</code></td>
    <td>The name of the domain of the app. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_.-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointInfo" /></td>
    <td><code>object</code></td>
    <td>Information about the network endpoint for the custom app. You can use the endpoint to connect to the custom app.</td>
</tr>
<tr>
    <td><CopyableCode code="LaunchOverrides" /></td>
    <td><code>object</code></td>
    <td>Options that apply when the app starts. These options override default behavior.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the app. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_.-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Simulation" /></td>
    <td><code>string</code></td>
    <td>The name of the simulation of the app. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_.-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current lifecycle state of the custom app. (STARTING, STARTED, STOPPING, STOPPED, ERROR, UNKNOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="TargetStatus" /></td>
    <td><code>string</code></td>
    <td>The desired lifecycle state of the custom app. (UNKNOWN, STARTED, STOPPED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_apps">

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
    <td><CopyableCode code="Apps" /></td>
    <td><code>array</code></td>
    <td>The list of apps for the given simulation and domain.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If SimSpace Weaver returns nextToken, then there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then nextToken is set to null. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 ValidationException error.</td>
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
    <td><a href="#describe_app"><CopyableCode code="describe_app" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app"><code>app</code></a>, <a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-simulation"><code>simulation</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the state of the given custom app.</td>
</tr>
<tr>
    <td><a href="#list_apps"><CopyableCode code="list_apps" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-simulation"><code>simulation</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all custom apps or service apps for the given simulation and domain.</td>
</tr>
<tr>
    <td><a href="#delete_app"><CopyableCode code="delete_app" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-app"><code>app</code></a>, <a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-simulation"><code>simulation</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the instance of the given custom app.</td>
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
<tr id="parameter-app">
    <td><CopyableCode code="app" /></td>
    <td><code>string</code></td>
    <td>The name of the app.</td>
</tr>
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The name of the domain of the app.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-simulation">
    <td><CopyableCode code="simulation" /></td>
    <td><code>string</code></td>
    <td>The name of the simulation of the app.</td>
</tr>
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The name of the domain that you want to list apps for.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of apps to list.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If SimSpace Weaver returns nextToken, then there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then nextToken is set to null. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 ValidationException error.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_app"
    values={[
        { label: 'describe_app', value: 'describe_app' },
        { label: 'list_apps', value: 'list_apps' }
    ]}
>
<TabItem value="describe_app">

Returns the state of the given custom app.

```sql
SELECT
Description,
Domain,
EndpointInfo,
LaunchOverrides,
Name,
Simulation,
Status,
TargetStatus
FROM aws.simspaceweaver.apps
WHERE app = '{{ app }}' -- required
AND domain = '{{ domain }}' -- required
AND simulation = '{{ simulation }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_apps">

Lists all custom apps or service apps for the given simulation and domain.

```sql
SELECT
Apps,
NextToken
FROM aws.simspaceweaver.apps
WHERE simulation = '{{ simulation }}' -- required
AND region = '{{ region }}' -- required
AND domain = '{{ domain }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_app"
    values={[
        { label: 'delete_app', value: 'delete_app' }
    ]}
>
<TabItem value="delete_app">

Deletes the instance of the given custom app.

```sql
DELETE FROM aws.simspaceweaver.apps
WHERE app = '{{ app }}' --required
AND domain = '{{ domain }}' --required
AND simulation = '{{ simulation }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
