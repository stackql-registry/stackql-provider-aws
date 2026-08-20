--- 
title: session_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - session_endpoints
  - emr
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

Creates, updates, deletes, gets or lists a <code>session_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="session_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.emr.session_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_session_endpoint"
    values={[
        { label: 'get_session_endpoint', value: 'get_session_endpoint' }
    ]}
>
<TabItem value="get_session_endpoint">

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
    <td><CopyableCode code="auth_token" /></td>
    <td><code>string</code></td>
    <td>A time-limited authentication token used to connect to the Spark Connect endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="auth_token_expiration_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the authentication token expires. After this time, call GetSessionEndpoint again to obtain a new token.</td>
</tr>
<tr>
    <td><CopyableCode code="credentials" /></td>
    <td><code>object</code></td>
    <td>Username and password used to authenticate with the Spark Connect server when connecting directly over VPC peering.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>The Spark Connect endpoint URL to use in the PySpark client. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#get_session_endpoint"><CopyableCode code="get_session_endpoint" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the Spark Connect endpoint URL and a time-limited authentication token for the specified session. Use the endpoint and token to connect a PySpark client to the session. Call this operation again when the token expires to obtain a new one.</td>
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
    defaultValue="get_session_endpoint"
    values={[
        { label: 'get_session_endpoint', value: 'get_session_endpoint' }
    ]}
>
<TabItem value="get_session_endpoint">

Returns the Spark Connect endpoint URL and a time-limited authentication token for the specified session. Use the endpoint and token to connect a PySpark client to the session. Call this operation again when the token expires to obtain a new one.

```sql
SELECT
auth_token,
auth_token_expiration_time,
credentials,
endpoint
FROM aws.emr.session_endpoints
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
