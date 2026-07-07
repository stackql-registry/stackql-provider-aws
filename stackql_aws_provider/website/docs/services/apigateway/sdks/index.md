--- 
title: sdks
hide_title: false
hide_table_of_contents: false
keywords:
  - sdks
  - apigateway
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

Creates, updates, deletes, gets or lists a <code>sdks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sdks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigateway.sdks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sdk"
    values={[
        { label: 'get_sdk', value: 'get_sdk' }
    ]}
>
<TabItem value="get_sdk">

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
    <td><CopyableCode code="body" /></td>
    <td><code>string (byte)</code></td>
    <td>The binary blob response to GetSdk, which contains the generated SDK.</td>
</tr>
<tr>
    <td><CopyableCode code="contentDisposition" /></td>
    <td><code>string</code></td>
    <td>The content-disposition header value in the HTTP response.</td>
</tr>
<tr>
    <td><CopyableCode code="contentType" /></td>
    <td><code>string</code></td>
    <td>The content-type header value in the HTTP response.</td>
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
    <td><a href="#get_sdk"><CopyableCode code="get_sdk" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-stage_name"><code>stage_name</code></a>, <a href="#parameter-sdk_type"><code>sdk_type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-parameters"><code>parameters</code></a></td>
    <td>Generates a client SDK for a RestApi and Stage.</td>
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
<tr id="parameter-restapi_id">
    <td><CopyableCode code="restapi_id" /></td>
    <td><code>string</code></td>
    <td>The string identifier of the associated RestApi.</td>
</tr>
<tr id="parameter-sdk_type">
    <td><CopyableCode code="sdk_type" /></td>
    <td><code>string</code></td>
    <td>The language for the generated SDK. Currently java, javascript, android, objectivec (for iOS), swift (for iOS), and ruby are supported.</td>
</tr>
<tr id="parameter-stage_name">
    <td><CopyableCode code="stage_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Stage that the SDK will use.</td>
</tr>
<tr id="parameter-parameters">
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>A string-to-string key-value map of query parameters sdkType-dependent properties of the SDK. For sdkType of objectivec or swift, a parameter named classPrefix is required. For sdkType of android, parameters named groupId, artifactId, artifactVersion, and invokerPackage are required. For sdkType of java, parameters named serviceName and javaPackageName are required.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_sdk"
    values={[
        { label: 'get_sdk', value: 'get_sdk' }
    ]}
>
<TabItem value="get_sdk">

Generates a client SDK for a RestApi and Stage.

```sql
SELECT
body,
contentDisposition,
contentType
FROM aws.apigateway.sdks
WHERE restapi_id = '{{ restapi_id }}' -- required
AND stage_name = '{{ stage_name }}' -- required
AND sdk_type = '{{ sdk_type }}' -- required
AND region = '{{ region }}' -- required
AND parameters = '{{ parameters }}'
;
```
</TabItem>
</Tabs>
