--- 
title: setup_histories
hide_title: false
hide_table_of_contents: false
keywords:
  - setup_histories
  - lightsail
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

Creates, updates, deletes, gets or lists a <code>setup_histories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="setup_histories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.setup_histories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_setup_history"
    values={[
        { label: 'get_setup_history', value: 'get_setup_history' }
    ]}
>
<TabItem value="get_setup_history">

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
    <td><CopyableCode code="next_page_token" /></td>
    <td><code>string</code></td>
    <td>The token to advance to the next page of results from your request. A next page token is not returned if there are no more results to display. To get the next page of results, perform another GetSetupHistory request and specify the next page token using the pageToken parameter. (pattern: &lt;code&gt;^&#91;A-Za-z0-9+/=&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="setup_history" /></td>
    <td><code>array</code></td>
    <td>The historical information that's returned.</td>
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
    <td><a href="#get_setup_history"><CopyableCode code="get_setup_history" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns detailed information for five of the most recent SetupInstanceHttps requests that were ran on the target instance.</td>
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
    defaultValue="get_setup_history"
    values={[
        { label: 'get_setup_history', value: 'get_setup_history' }
    ]}
>
<TabItem value="get_setup_history">

Returns detailed information for five of the most recent SetupInstanceHttps requests that were ran on the target instance.

```sql
SELECT
next_page_token,
setup_history
FROM aws.lightsail.setup_histories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
