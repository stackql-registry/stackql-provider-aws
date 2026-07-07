--- 
title: trust_stores
hide_title: false
hide_table_of_contents: false
keywords:
  - trust_stores
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

Creates, updates, deletes, gets or lists a <code>trust_stores</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="trust_stores" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces_web.trust_stores" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_trust_store"
    values={[
        { label: 'get_trust_store', value: 'get_trust_store' },
        { label: 'list_trust_stores', value: 'list_trust_stores' }
    ]}
>
<TabItem value="get_trust_store">

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
    <td><CopyableCode code="associatedPortalArns" /></td>
    <td><code>array</code></td>
    <td>A list of web portal ARNs that this trust store is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="trustStoreArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the trust store. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:&#91;a-zA-Z0-9\-&#93;+:&#91;a-zA-Z0-9\-&#93;*:&#91;a-zA-Z0-9&#93;&#123;1,12&#125;:&#91;a-zA-Z&#93;+(\/&#91;a-fA-F0-9\-&#93;&#123;36&#125;)+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_trust_stores">

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
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token used to retrieve the next page of results for this operation. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="trustStores" /></td>
    <td><code>array</code></td>
    <td>The trust stores.</td>
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
    <td><a href="#get_trust_store"><CopyableCode code="get_trust_store" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-trust_store_arn"><code>trust_store_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the trust store.</td>
</tr>
<tr>
    <td><a href="#list_trust_stores"><CopyableCode code="list_trust_stores" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a list of trust stores.</td>
</tr>
<tr>
    <td><a href="#create_trust_store"><CopyableCode code="create_trust_store" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-certificateList"><code>certificateList</code></a></td>
    <td></td>
    <td>Creates a trust store that can be associated with a web portal. A trust store contains certificate authority (CA) certificates. Once associated with a web portal, the browser in a streaming session will recognize certificates that have been issued using any of the CAs in the trust store. If your organization has internal websites that use certificates issued by private CAs, you should add the private CA certificate to the trust store.</td>
</tr>
<tr>
    <td><a href="#associate_trust_store"><CopyableCode code="associate_trust_store" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-portal_arn"><code>portal_arn</code></a>, <a href="#parameter-trustStoreArn"><code>trustStoreArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Associates a trust store with a web portal.</td>
</tr>
<tr>
    <td><a href="#disassociate_trust_store"><CopyableCode code="disassociate_trust_store" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-portal_arn"><code>portal_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates a trust store from a web portal.</td>
</tr>
<tr>
    <td><a href="#update_trust_store"><CopyableCode code="update_trust_store" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-trust_store_arn"><code>trust_store_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the trust store.</td>
</tr>
<tr>
    <td><a href="#delete_trust_store"><CopyableCode code="delete_trust_store" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-trust_store_arn"><code>trust_store_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the trust store.</td>
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
<tr id="parameter-trustStoreArn">
    <td><CopyableCode code="trustStoreArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the trust store.</td>
</tr>
<tr id="parameter-trust_store_arn">
    <td><CopyableCode code="trust_store_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the trust store.</td>
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
    defaultValue="get_trust_store"
    values={[
        { label: 'get_trust_store', value: 'get_trust_store' },
        { label: 'list_trust_stores', value: 'list_trust_stores' }
    ]}
>
<TabItem value="get_trust_store">

Gets the trust store.

```sql
SELECT
associatedPortalArns,
trustStoreArn
FROM aws.workspaces_web.trust_stores
WHERE trust_store_arn = '{{ trust_store_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_trust_stores">

Retrieves a list of trust stores.

```sql
SELECT
nextToken,
trustStores
FROM aws.workspaces_web.trust_stores
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_trust_store"
    values={[
        { label: 'create_trust_store', value: 'create_trust_store' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_trust_store">

Creates a trust store that can be associated with a web portal. A trust store contains certificate authority (CA) certificates. Once associated with a web portal, the browser in a streaming session will recognize certificates that have been issued using any of the CAs in the trust store. If your organization has internal websites that use certificates issued by private CAs, you should add the private CA certificate to the trust store.

```sql
INSERT INTO aws.workspaces_web.trust_stores (
certificateList,
tags,
clientToken,
region
)
SELECT 
'{{ certificateList }}' /* required */,
'{{ tags }}',
'{{ clientToken }}',
'{{ region }}'
RETURNING
trustStoreArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: trust_stores
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the trust_stores resource.
    - name: certificateList
      value:
        - "{{ certificateList }}"
    - name: tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_trust_store"
    values={[
        { label: 'associate_trust_store', value: 'associate_trust_store' },
        { label: 'disassociate_trust_store', value: 'disassociate_trust_store' },
        { label: 'update_trust_store', value: 'update_trust_store' }
    ]}
>
<TabItem value="associate_trust_store">

Associates a trust store with a web portal.

```sql
UPDATE aws.workspaces_web.trust_stores
SET 
-- No updatable properties
WHERE 
portal_arn = '{{ portal_arn }}' --required
AND trustStoreArn = '{{ trustStoreArn }}' --required
AND region = '{{ region }}' --required
RETURNING
portalArn,
trustStoreArn;
```
</TabItem>
<TabItem value="disassociate_trust_store">

Disassociates a trust store from a web portal.

```sql
UPDATE aws.workspaces_web.trust_stores
SET 
-- No updatable properties
WHERE 
portal_arn = '{{ portal_arn }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="update_trust_store">

Updates the trust store.

```sql
UPDATE aws.workspaces_web.trust_stores
SET 
certificatesToAdd = '{{ certificatesToAdd }}',
certificatesToDelete = '{{ certificatesToDelete }}',
clientToken = '{{ clientToken }}'
WHERE 
trust_store_arn = '{{ trust_store_arn }}' --required
AND region = '{{ region }}' --required
RETURNING
trustStoreArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_trust_store"
    values={[
        { label: 'delete_trust_store', value: 'delete_trust_store' }
    ]}
>
<TabItem value="delete_trust_store">

Deletes the trust store.

```sql
DELETE FROM aws.workspaces_web.trust_stores
WHERE trust_store_arn = '{{ trust_store_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
