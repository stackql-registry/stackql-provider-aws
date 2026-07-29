--- 
title: resource_oauth2_tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_oauth2_tokens
  - bedrock_agentcore
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

Creates, updates, deletes, gets or lists a <code>resource_oauth2_tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_oauth2_tokens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore.resource_oauth2_tokens" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resource_oauth2_token"
    values={[
        { label: 'get_resource_oauth2_token', value: 'get_resource_oauth2_token' }
    ]}
>
<TabItem value="get_resource_oauth2_token">

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
    <td><CopyableCode code="access_token" /></td>
    <td><code>string</code></td>
    <td>The OAuth 2.0 access token to use.</td>
</tr>
<tr>
    <td><CopyableCode code="authorization_url" /></td>
    <td><code>string</code></td>
    <td>The URL to initiate the authorization process, provided when the access token requires user authorization.</td>
</tr>
<tr>
    <td><CopyableCode code="session_status" /></td>
    <td><code>string</code></td>
    <td>Status indicating whether the user's authorization session is in progress or has failed. This helps determine the next steps in the OAuth2 authentication flow. (IN_PROGRESS, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="session_uri" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the user's authorization session for retrieving OAuth2 tokens. This matches the sessionId from the request and can be used to track the session state. (pattern: &lt;code&gt;urn:ietf:params:oauth:request_uri:&#91;a-zA-Z0-9-._~&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_resource_oauth2_token"><CopyableCode code="get_resource_oauth2_token" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the OAuth 2.0 token of the provided resource.</td>
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
    defaultValue="get_resource_oauth2_token"
    values={[
        { label: 'get_resource_oauth2_token', value: 'get_resource_oauth2_token' }
    ]}
>
<TabItem value="get_resource_oauth2_token">

Returns the OAuth 2.0 token of the provided resource.

```sql
SELECT
access_token,
authorization_url,
session_status,
session_uri
FROM aws.bedrock_agentcore.resource_oauth2_tokens
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
