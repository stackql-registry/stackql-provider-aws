--- 
title: apps
hide_title: false
hide_table_of_contents: false
keywords:
  - apps
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

Creates, updates, deletes, gets or lists an <code>apps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="apps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.apps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_app"
    values={[
        { label: 'describe_app', value: 'describe_app' },
        { label: 'search_apps', value: 'search_apps' },
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
    <td><CopyableCode code="app" /></td>
    <td><code>object</code></td>
    <td>The information about the app.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_apps">

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
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the app. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the app.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the app was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the app was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The display name of the app. (pattern: &lt;code&gt;&#91;\S\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>The sharing status of the app: PUBLIC if the app is shared publicly, or PRIVATE if it is private. (PRIVATE, PUBLIC)</td>
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
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the app. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the app.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the app was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the app was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The display name of the app. (pattern: &lt;code&gt;&#91;\S\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>The sharing status of the app: PUBLIC if the app is shared publicly, or PRIVATE if it is private. (PRIVATE, PUBLIC)</td>
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
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an app.</td>
</tr>
<tr>
    <td><a href="#search_apps"><CopyableCode code="search_apps" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches for apps in an Amazon Web Services account using the specified filters. This operation is eventually consistent; the results might not reflect very recent updates. Results are paginated; use the NextToken parameter to retrieve additional results.</td>
</tr>
<tr>
    <td><a href="#list_apps"><CopyableCode code="list_apps" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Lists the apps in an Amazon Web Services account. Results are paginated; use the NextToken parameter to retrieve additional results.</td>
</tr>
<tr>
    <td><a href="#delete_app"><CopyableCode code="delete_app" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an app.</td>
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
<tr id="parameter-app_id">
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the app that you want to delete.</td>
</tr>
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that contains the app.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single request. Valid range is 1 to 100. If you don't specify a value, the default is 20.</td>
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
    defaultValue="describe_app"
    values={[
        { label: 'describe_app', value: 'describe_app' },
        { label: 'search_apps', value: 'search_apps' },
        { label: 'list_apps', value: 'list_apps' }
    ]}
>
<TabItem value="describe_app">

Describes an app.

```sql
SELECT
app,
request_id
FROM aws.quicksight.apps
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND app_id = '{{ app_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="search_apps">

Searches for apps in an Amazon Web Services account using the specified filters. This operation is eventually consistent; the results might not reflect very recent updates. Results are paginated; use the NextToken parameter to retrieve additional results.

```sql
SELECT
app_id,
arn,
created_time,
last_updated_time,
name,
visibility
FROM aws.quicksight.apps
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_apps">

Lists the apps in an Amazon Web Services account. Results are paginated; use the NextToken parameter to retrieve additional results.

```sql
SELECT
app_id,
arn,
created_time,
last_updated_time,
name,
visibility
FROM aws.quicksight.apps
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
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

Deletes an app.

```sql
DELETE FROM aws.quicksight.apps
WHERE aws_account_id = '{{ aws_account_id }}' --required
AND app_id = '{{ app_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
