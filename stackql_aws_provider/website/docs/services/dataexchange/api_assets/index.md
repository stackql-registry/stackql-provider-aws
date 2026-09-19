--- 
title: api_assets
hide_title: false
hide_table_of_contents: false
keywords:
  - api_assets
  - dataexchange
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

Creates, updates, deletes, gets or lists an <code>api_assets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="api_assets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dataexchange.api_assets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#send_api_asset"><CopyableCode code="send_api_asset" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-x-amzn-dataexchange-asset-id"><code>x-amzn-dataexchange-asset-id</code></a>, <a href="#parameter-x-amzn-dataexchange-data-set-id"><code>x-amzn-dataexchange-data-set-id</code></a>, <a href="#parameter-x-amzn-dataexchange-revision-id"><code>x-amzn-dataexchange-revision-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-QueryStringParameters"><code>QueryStringParameters</code></a>, <a href="#parameter-x-amzn-dataexchange-header-"><code>x-amzn-dataexchange-header-</code></a>, <a href="#parameter-x-amzn-dataexchange-http-method"><code>x-amzn-dataexchange-http-method</code></a>, <a href="#parameter-x-amzn-dataexchange-path"><code>x-amzn-dataexchange-path</code></a></td>
    <td>This operation invokes an API Gateway API asset. The request is proxied to the provider’s API Gateway API.</td>
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
<tr id="parameter-x-amzn-dataexchange-asset-id">
    <td><CopyableCode code="x-amzn-dataexchange-asset-id" /></td>
    <td><code>string</code></td>
    <td>Asset ID value for the API request.</td>
</tr>
<tr id="parameter-x-amzn-dataexchange-data-set-id">
    <td><CopyableCode code="x-amzn-dataexchange-data-set-id" /></td>
    <td><code>string</code></td>
    <td>Data set ID value for the API request.</td>
</tr>
<tr id="parameter-x-amzn-dataexchange-revision-id">
    <td><CopyableCode code="x-amzn-dataexchange-revision-id" /></td>
    <td><code>string</code></td>
    <td>Revision ID value for the API request.</td>
</tr>
<tr id="parameter-QueryStringParameters">
    <td><CopyableCode code="QueryStringParameters" /></td>
    <td><code>object</code></td>
    <td>Attach query string parameters to the end of the URI (for example, /v1/examplePath?exampleParam=exampleValue).</td>
</tr>
<tr id="parameter-x-amzn-dataexchange-header-">
    <td><CopyableCode code="x-amzn-dataexchange-header-" /></td>
    <td><code>object</code></td>
    <td>Any header value prefixed with x-amzn-dataexchange-header- will have that stripped before sending the Asset API request. Use this when you want to override a header that AWS Data Exchange uses. Alternatively, you can use the header without a prefix to the HTTP request.</td>
</tr>
<tr id="parameter-x-amzn-dataexchange-http-method">
    <td><CopyableCode code="x-amzn-dataexchange-http-method" /></td>
    <td><code>string</code></td>
    <td>HTTP method value for the API request. Alternatively, you can use the appropriate verb in your request.</td>
</tr>
<tr id="parameter-x-amzn-dataexchange-path">
    <td><CopyableCode code="x-amzn-dataexchange-path" /></td>
    <td><code>string</code></td>
    <td>URI path value for the API request. Alternatively, you can set the URI path directly by invoking /v1/&#123;pathValue&#125;.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="send_api_asset"
    values={[
        { label: 'send_api_asset', value: 'send_api_asset' }
    ]}
>
<TabItem value="send_api_asset">

This operation invokes an API Gateway API asset. The request is proxied to the provider’s API Gateway API.

```sql
EXEC aws.dataexchange.api_assets.send_api_asset 
@x-amzn-dataexchange-asset-id='{{ x-amzn-dataexchange-asset-id }}' --required, 
@x-amzn-dataexchange-data-set-id='{{ x-amzn-dataexchange-data-set-id }}' --required, 
@x-amzn-dataexchange-revision-id='{{ x-amzn-dataexchange-revision-id }}' --required, 
@region='{{ region }}' --required, 
@QueryStringParameters='{{ QueryStringParameters }}', 
@x-amzn-dataexchange-header-='{{ x-amzn-dataexchange-header- }}', 
@x-amzn-dataexchange-http-method='{{ x-amzn-dataexchange-http-method }}', 
@x-amzn-dataexchange-path='{{ x-amzn-dataexchange-path }}' 
@@json=
'{
"Body": "{{ Body }}"
}'
;
```
</TabItem>
</Tabs>
