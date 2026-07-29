--- 
title: response_headers_policy_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - response_headers_policy_configs
  - cloudfront
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

Creates, updates, deletes, gets or lists a <code>response_headers_policy_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="response_headers_policy_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.response_headers_policy_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_response_headers_policy_config"
    values={[
        { label: 'get_response_headers_policy_config', value: 'get_response_headers_policy_config' }
    ]}
>
<TabItem value="get_response_headers_policy_config">

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
    <td><CopyableCode code="comment" /></td>
    <td><code>string</code></td>
    <td>A comment to describe the response headers policy. The comment cannot be longer than 128 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="cors_config" /></td>
    <td><code>string</code></td>
    <td>A configuration for a set of HTTP response headers that are used for cross-origin resource sharing (CORS).</td>
</tr>
<tr>
    <td><CopyableCode code="custom_headers_config" /></td>
    <td><code>string</code></td>
    <td>A configuration for a set of custom HTTP response headers.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A name to identify the response headers policy. The name must be unique for response headers policies in this Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="remove_headers_config" /></td>
    <td><code>string</code></td>
    <td>A configuration for a set of HTTP headers to remove from the HTTP response.</td>
</tr>
<tr>
    <td><CopyableCode code="security_headers_config" /></td>
    <td><code>string</code></td>
    <td>A configuration for a set of security-related HTTP response headers.</td>
</tr>
<tr>
    <td><CopyableCode code="server_timing_headers_config" /></td>
    <td><code>string</code></td>
    <td>A configuration for enabling the Server-Timing header in HTTP responses sent from CloudFront.</td>
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
    <td><a href="#get_response_headers_policy_config"><CopyableCode code="get_response_headers_policy_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a response headers policy configuration. To get a response headers policy configuration, you must provide the policy's identifier. If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using ListDistributions or GetDistribution. If the response headers policy is not attached to a cache behavior, you can get the identifier using ListResponseHeadersPolicies.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the response headers policy. If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using ListDistributions or GetDistribution. If the response headers policy is not attached to a cache behavior, you can get the identifier using ListResponseHeadersPolicies.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_response_headers_policy_config"
    values={[
        { label: 'get_response_headers_policy_config', value: 'get_response_headers_policy_config' }
    ]}
>
<TabItem value="get_response_headers_policy_config">

Gets a response headers policy configuration. To get a response headers policy configuration, you must provide the policy's identifier. If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using ListDistributions or GetDistribution. If the response headers policy is not attached to a cache behavior, you can get the identifier using ListResponseHeadersPolicies.

```sql
SELECT
comment,
cors_config,
custom_headers_config,
name,
remove_headers_config,
security_headers_config,
server_timing_headers_config
FROM aws.cloudfront.response_headers_policy_configs
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
