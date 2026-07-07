--- 
title: trust_store_certificates
hide_title: false
hide_table_of_contents: false
keywords:
  - trust_store_certificates
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

Creates, updates, deletes, gets or lists a <code>trust_store_certificates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="trust_store_certificates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces_web.trust_store_certificates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_trust_store_certificate"
    values={[
        { label: 'get_trust_store_certificate', value: 'get_trust_store_certificate' },
        { label: 'list_trust_store_certificates', value: 'list_trust_store_certificates' }
    ]}
>
<TabItem value="get_trust_store_certificate">

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
    <td><CopyableCode code="certificate" /></td>
    <td><code>object</code></td>
    <td>The certificate of the trust store certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="trustStoreArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the trust store certificate. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:&#91;a-zA-Z0-9\-&#93;+:&#91;a-zA-Z0-9\-&#93;*:&#91;a-zA-Z0-9&#93;&#123;1,12&#125;:&#91;a-zA-Z&#93;+(\/&#91;a-fA-F0-9\-&#93;&#123;36&#125;)+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_trust_store_certificates">

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
    <td><CopyableCode code="certificateList" /></td>
    <td><code>array</code></td>
    <td>The certificate list.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token used to retrieve the next page of results for this operation.&gt; (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="trustStoreArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the trust store. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:&#91;a-zA-Z0-9\-&#93;+:&#91;a-zA-Z0-9\-&#93;*:&#91;a-zA-Z0-9&#93;&#123;1,12&#125;:&#91;a-zA-Z&#93;+(\/&#91;a-fA-F0-9\-&#93;&#123;36&#125;)+&lt;/code&gt;)</td>
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
    <td><a href="#get_trust_store_certificate"><CopyableCode code="get_trust_store_certificate" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-trust_store_arn"><code>trust_store_arn</code></a>, <a href="#parameter-thumbprint"><code>thumbprint</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the trust store certificate.</td>
</tr>
<tr>
    <td><a href="#list_trust_store_certificates"><CopyableCode code="list_trust_store_certificates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-trust_store_arn"><code>trust_store_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a list of trust store certificates.</td>
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
<tr id="parameter-thumbprint">
    <td><CopyableCode code="thumbprint" /></td>
    <td><code>string</code></td>
    <td>The thumbprint of the trust store certificate.</td>
</tr>
<tr id="parameter-trust_store_arn">
    <td><CopyableCode code="trust_store_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the trust store</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be included in the next page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token used to retrieve the next page of results for this operation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_trust_store_certificate"
    values={[
        { label: 'get_trust_store_certificate', value: 'get_trust_store_certificate' },
        { label: 'list_trust_store_certificates', value: 'list_trust_store_certificates' }
    ]}
>
<TabItem value="get_trust_store_certificate">

Gets the trust store certificate.

```sql
SELECT
certificate,
trustStoreArn
FROM aws.workspaces_web.trust_store_certificates
WHERE trust_store_arn = '{{ trust_store_arn }}' -- required
AND thumbprint = '{{ thumbprint }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_trust_store_certificates">

Retrieves a list of trust store certificates.

```sql
SELECT
certificateList,
nextToken,
trustStoreArn
FROM aws.workspaces_web.trust_store_certificates
WHERE trust_store_arn = '{{ trust_store_arn }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
