--- 
title: crls
hide_title: false
hide_table_of_contents: false
keywords:
  - crls
  - rolesanywhere
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

Creates, updates, deletes, gets or lists a <code>crls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="crls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rolesanywhere.crls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_crl"
    values={[
        { label: 'get_crl', value: 'get_crl' },
        { label: 'list_crls', value: 'list_crls' }
    ]}
>
<TabItem value="get_crl">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the certificate revocation list (CRL).</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ISO-8601 timestamp when the certificate revocation list (CRL) was created.</td>
</tr>
<tr>
    <td><CopyableCode code="crl_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the certificate revocation list (CRL).</td>
</tr>
<tr>
    <td><CopyableCode code="crl_data" /></td>
    <td><code>string (byte)</code></td>
    <td>The state of the certificate revocation list (CRL) after a read or write operation.</td>
</tr>
<tr>
    <td><CopyableCode code="crl_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the certificate revocation list (CRL). (pattern: &lt;code&gt;.*&#91;a-f0-9&#93;&#123;8&#125;-(&#91;a-z0-9&#93;&#123;4&#125;-)&#123;3&#125;&#91;a-z0-9&#93;&#123;12&#125;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the certificate revocation list (CRL) is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="trust_anchor_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the TrustAnchor the certificate revocation list (CRL) will provide revocation for.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ISO-8601 timestamp when the certificate revocation list (CRL) was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_crls">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the certificate revocation list (CRL).</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ISO-8601 timestamp when the certificate revocation list (CRL) was created.</td>
</tr>
<tr>
    <td><CopyableCode code="crl_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the certificate revocation list (CRL).</td>
</tr>
<tr>
    <td><CopyableCode code="crl_data" /></td>
    <td><code>string (byte)</code></td>
    <td>The state of the certificate revocation list (CRL) after a read or write operation.</td>
</tr>
<tr>
    <td><CopyableCode code="crl_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the certificate revocation list (CRL). (pattern: &lt;code&gt;.*&#91;a-f0-9&#93;&#123;8&#125;-(&#91;a-z0-9&#93;&#123;4&#125;-)&#123;3&#125;&#91;a-z0-9&#93;&#123;12&#125;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the certificate revocation list (CRL) is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="trust_anchor_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the TrustAnchor the certificate revocation list (CRL) will provide revocation for.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ISO-8601 timestamp when the certificate revocation list (CRL) was last updated.</td>
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
    <td><a href="#get_crl"><CopyableCode code="get_crl" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-crl_id"><code>crl_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a certificate revocation list (CRL). Required permissions: rolesanywhere:GetCrl.</td>
</tr>
<tr>
    <td><a href="#list_crls"><CopyableCode code="list_crls" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists all certificate revocation lists (CRL) in the authenticated account and Amazon Web Services Region. Required permissions: rolesanywhere:ListCrls.</td>
</tr>
<tr>
    <td><a href="#update_crl"><CopyableCode code="update_crl" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-crl_id"><code>crl_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the certificate revocation list (CRL). A CRL is a list of certificates that have been revoked by the issuing certificate authority (CA). IAM Roles Anywhere validates against the CRL before issuing credentials. Required permissions: rolesanywhere:UpdateCrl.</td>
</tr>
<tr>
    <td><a href="#delete_crl"><CopyableCode code="delete_crl" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-crl_id"><code>crl_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a certificate revocation list (CRL). Required permissions: rolesanywhere:DeleteCrl.</td>
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
<tr id="parameter-crl_id">
    <td><CopyableCode code="crl_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the certificate revocation list (CRL).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token that indicates where the output should continue from, if a previous request did not show all results. To get the next results, make the request again with this value.</td>
</tr>
<tr id="parameter-pageSize">
    <td><CopyableCode code="pageSize" /></td>
    <td><code>integer</code></td>
    <td>The number of resources in the paginated list.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_crl"
    values={[
        { label: 'get_crl', value: 'get_crl' },
        { label: 'list_crls', value: 'list_crls' }
    ]}
>
<TabItem value="get_crl">

Gets a certificate revocation list (CRL). Required permissions: rolesanywhere:GetCrl.

```sql
SELECT
name,
created_at,
crl_arn,
crl_data,
crl_id,
enabled,
trust_anchor_arn,
updated_at
FROM aws.rolesanywhere.crls
WHERE crl_id = '{{ crl_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_crls">

Lists all certificate revocation lists (CRL) in the authenticated account and Amazon Web Services Region. Required permissions: rolesanywhere:ListCrls.

```sql
SELECT
name,
created_at,
crl_arn,
crl_data,
crl_id,
enabled,
trust_anchor_arn,
updated_at
FROM aws.rolesanywhere.crls
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND pageSize = '{{ pageSize }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_crl"
    values={[
        { label: 'update_crl', value: 'update_crl' }
    ]}
>
<TabItem value="update_crl">

Updates the certificate revocation list (CRL). A CRL is a list of certificates that have been revoked by the issuing certificate authority (CA). IAM Roles Anywhere validates against the CRL before issuing credentials. Required permissions: rolesanywhere:UpdateCrl.

```sql
UPDATE aws.rolesanywhere.crls
SET 
name = '{{ name }}',
crlData = '{{ crlData }}'
WHERE 
crl_id = '{{ crl_id }}' --required
AND region = '{{ region }}' --required
RETURNING
crl;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_crl"
    values={[
        { label: 'delete_crl', value: 'delete_crl' }
    ]}
>
<TabItem value="delete_crl">

Deletes a certificate revocation list (CRL). Required permissions: rolesanywhere:DeleteCrl.

```sql
DELETE FROM aws.rolesanywhere.crls
WHERE crl_id = '{{ crl_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
