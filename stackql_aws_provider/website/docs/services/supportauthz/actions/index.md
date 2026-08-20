--- 
title: actions
hide_title: false
hide_table_of_contents: false
keywords:
  - actions
  - supportauthz
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

Creates, updates, deletes, gets or lists an <code>actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="actions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.supportauthz.actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_action"
    values={[
        { label: 'get_action', value: 'get_action' },
        { label: 'list_actions', value: 'list_actions' }
    ]}
>
<TabItem value="get_action">

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
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The name of the support action. (pattern: &lt;code&gt;&#91;a-z&#93;&#91;a-z0-9-&#93;*:&#91;A-Za-z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of what the support action does.</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>The AWS service associated with the support action. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_actions">

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
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The name of the support action. (pattern: &lt;code&gt;&#91;a-z&#93;&#91;a-z0-9-&#93;*:&#91;A-Za-z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of what the support action does.</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>The AWS service associated with the support action. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_action"><CopyableCode code="get_action" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-action"><code>action</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the description of a specific support action.</td>
</tr>
<tr>
    <td><a href="#list_actions"><CopyableCode code="list_actions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service"><code>service</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists available support actions for a specified AWS service. Use pagination to ensure that the operation returns quickly and successfully.</td>
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
<tr id="parameter-action">
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The name of the support action to retrieve.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-service">
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>The name of the AWS service for which to list available support actions.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call. Valid range is 1 to 100.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_action"
    values={[
        { label: 'get_action', value: 'get_action' },
        { label: 'list_actions', value: 'list_actions' }
    ]}
>
<TabItem value="get_action">

Retrieves the description of a specific support action.

```sql
SELECT
action,
description,
service
FROM aws.supportauthz.actions
WHERE action = '{{ action }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_actions">

Lists available support actions for a specified AWS service. Use pagination to ensure that the operation returns quickly and successfully.

```sql
SELECT
action,
description,
service
FROM aws.supportauthz.actions
WHERE service = '{{ service }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
