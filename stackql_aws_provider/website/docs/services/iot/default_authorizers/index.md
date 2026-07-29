--- 
title: default_authorizers
hide_title: false
hide_table_of_contents: false
keywords:
  - default_authorizers
  - iot
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

Creates, updates, deletes, gets or lists a <code>default_authorizers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="default_authorizers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.default_authorizers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_default_authorizer"
    values={[
        { label: 'describe_default_authorizer', value: 'describe_default_authorizer' }
    ]}
>
<TabItem value="describe_default_authorizer">

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
    <td><CopyableCode code="authorizer_arn" /></td>
    <td><code>string</code></td>
    <td>The authorizer ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizer_function_arn" /></td>
    <td><code>string</code></td>
    <td>The authorizer's Lambda function ARN. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="authorizer_name" /></td>
    <td><code>string</code></td>
    <td>The authorizer name. (pattern: &lt;code&gt;&#91;\w=,@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The UNIX timestamp of when the authorizer was created.</td>
</tr>
<tr>
    <td><CopyableCode code="enable_caching_for_http" /></td>
    <td><code>boolean</code></td>
    <td>When true, the result from the authorizer’s Lambda function is cached for the time specified in refreshAfterInSeconds. The cached result is used while the device reuses the same HTTP connection.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The UNIX timestamp of when the authorizer was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="signing_disabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether IoT validates the token signature in an authorization request.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the authorizer. (ACTIVE, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="token_key_name" /></td>
    <td><code>string</code></td>
    <td>The key used to extract the token from the HTTP headers. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="token_signing_public_keys" /></td>
    <td><code>object</code></td>
    <td>The public keys used to validate the token signature returned by your custom authentication service.</td>
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
    <td><a href="#describe_default_authorizer"><CopyableCode code="describe_default_authorizer" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the default authorizer. Requires permission to access the DescribeDefaultAuthorizer action.</td>
</tr>
<tr>
    <td><a href="#set_default_authorizer"><CopyableCode code="set_default_authorizer" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-authorizerName"><code>authorizerName</code></a></td>
    <td></td>
    <td>Sets the default authorizer. This will be used if a websocket connection is made without specifying an authorizer. Requires permission to access the SetDefaultAuthorizer action.</td>
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
    defaultValue="describe_default_authorizer"
    values={[
        { label: 'describe_default_authorizer', value: 'describe_default_authorizer' }
    ]}
>
<TabItem value="describe_default_authorizer">

Describes the default authorizer. Requires permission to access the DescribeDefaultAuthorizer action.

```sql
SELECT
authorizer_arn,
authorizer_function_arn,
authorizer_name,
creation_date,
enable_caching_for_http,
last_modified_date,
signing_disabled,
status,
token_key_name,
token_signing_public_keys
FROM aws.iot.default_authorizers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_default_authorizer"
    values={[
        { label: 'set_default_authorizer', value: 'set_default_authorizer' }
    ]}
>
<TabItem value="set_default_authorizer">

Sets the default authorizer. This will be used if a websocket connection is made without specifying an authorizer. Requires permission to access the SetDefaultAuthorizer action.

```sql
UPDATE aws.iot.default_authorizers
SET 
authorizerName = '{{ authorizerName }}'
WHERE 
region = '{{ region }}' --required
AND authorizerName = '{{ authorizerName }}' --required
RETURNING
authorizer_arn,
authorizer_name;
```
</TabItem>
</Tabs>
