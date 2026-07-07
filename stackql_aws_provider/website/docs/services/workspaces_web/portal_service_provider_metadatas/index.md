--- 
title: portal_service_provider_metadatas
hide_title: false
hide_table_of_contents: false
keywords:
  - portal_service_provider_metadatas
  - workspaces_web
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

Creates, updates, deletes, gets or lists a <code>portal_service_provider_metadatas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="portal_service_provider_metadatas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces_web.portal_service_provider_metadatas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_portal_service_provider_metadata"
    values={[
        { label: 'get_portal_service_provider_metadata', value: 'get_portal_service_provider_metadata' }
    ]}
>
<TabItem value="get_portal_service_provider_metadata">

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
    <td><CopyableCode code="portalArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the web portal. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:&#91;a-zA-Z0-9\-&#93;+:&#91;a-zA-Z0-9\-&#93;*:&#91;a-zA-Z0-9&#93;&#123;1,12&#125;:&#91;a-zA-Z&#93;+(\/&#91;a-fA-F0-9\-&#93;&#123;36&#125;)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceProviderSamlMetadata" /></td>
    <td><code>string</code></td>
    <td>The service provider SAML metadata. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
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
    <td><a href="#get_portal_service_provider_metadata"><CopyableCode code="get_portal_service_provider_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-portal_arn"><code>portal_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the service provider metadata.</td>
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
<tr id="parameter-portal_arn">
    <td><CopyableCode code="portal_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the web portal.</td>
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
    defaultValue="get_portal_service_provider_metadata"
    values={[
        { label: 'get_portal_service_provider_metadata', value: 'get_portal_service_provider_metadata' }
    ]}
>
<TabItem value="get_portal_service_provider_metadata">

Gets the service provider metadata.

```sql
SELECT
portalArn,
serviceProviderSamlMetadata
FROM aws.workspaces_web.portal_service_provider_metadatas
WHERE portal_arn = '{{ portal_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
