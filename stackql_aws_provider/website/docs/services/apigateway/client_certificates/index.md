--- 
title: client_certificates
hide_title: false
hide_table_of_contents: false
keywords:
  - client_certificates
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

Creates, updates, deletes, gets or lists a <code>client_certificates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="client_certificates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigateway.client_certificates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_client_certificate"
    values={[
        { label: 'get_client_certificate', value: 'get_client_certificate' },
        { label: 'get_client_certificates', value: 'get_client_certificates' }
    ]}
>
<TabItem value="get_client_certificate">

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
    <td><CopyableCode code="clientCertificateId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the client certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="createdDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the client certificate was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the client certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="expirationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the client certificate will expire.</td>
</tr>
<tr>
    <td><CopyableCode code="pemEncodedCertificate" /></td>
    <td><code>string</code></td>
    <td>The PEM-encoded public key of the client certificate, which can be used to configure certificate authentication in the integration endpoint .</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The collection of tags. Each tag element is associated with a given resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_client_certificates">

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
    <td><CopyableCode code="clientCertificateId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the client certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="createdDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the client certificate was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the client certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="expirationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the client certificate will expire.</td>
</tr>
<tr>
    <td><CopyableCode code="pemEncodedCertificate" /></td>
    <td><code>string</code></td>
    <td>The PEM-encoded public key of the client certificate, which can be used to configure certificate authentication in the integration endpoint .</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The collection of tags. Each tag element is associated with a given resource.</td>
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
    <td><a href="#get_client_certificate"><CopyableCode code="get_client_certificate" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-clientcertificate_id"><code>clientcertificate_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the current ClientCertificate resource.</td>
</tr>
<tr>
    <td><a href="#get_client_certificates"><CopyableCode code="get_client_certificates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-position"><code>position</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>Gets a collection of ClientCertificate resources.</td>
</tr>
<tr>
    <td><a href="#update_client_certificate"><CopyableCode code="update_client_certificate" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-clientcertificate_id"><code>clientcertificate_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Changes information about an ClientCertificate resource.</td>
</tr>
<tr>
    <td><a href="#delete_client_certificate"><CopyableCode code="delete_client_certificate" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-clientcertificate_id"><code>clientcertificate_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the ClientCertificate resource.</td>
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
<tr id="parameter-clientcertificate_id">
    <td><CopyableCode code="clientcertificate_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the ClientCertificate resource to be deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</td>
</tr>
<tr id="parameter-position">
    <td><CopyableCode code="position" /></td>
    <td><code>string</code></td>
    <td>The current pagination position in the paged result set.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_client_certificate"
    values={[
        { label: 'get_client_certificate', value: 'get_client_certificate' },
        { label: 'get_client_certificates', value: 'get_client_certificates' }
    ]}
>
<TabItem value="get_client_certificate">

Gets information about the current ClientCertificate resource.

```sql
SELECT
clientCertificateId,
createdDate,
description,
expirationDate,
pemEncodedCertificate,
tags
FROM aws.apigateway.client_certificates
WHERE clientcertificate_id = '{{ clientcertificate_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_client_certificates">

Gets a collection of ClientCertificate resources.

```sql
SELECT
clientCertificateId,
createdDate,
description,
expirationDate,
pemEncodedCertificate,
tags
FROM aws.apigateway.client_certificates
WHERE region = '{{ region }}' -- required
AND position = '{{ position }}'
AND limit = '{{ limit }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_client_certificate"
    values={[
        { label: 'update_client_certificate', value: 'update_client_certificate' }
    ]}
>
<TabItem value="update_client_certificate">

Changes information about an ClientCertificate resource.

```sql
UPDATE aws.apigateway.client_certificates
SET 
patchOperations = '{{ patchOperations }}'
WHERE 
clientcertificate_id = '{{ clientcertificate_id }}' --required
AND region = '{{ region }}' --required
RETURNING
clientCertificateId,
createdDate,
description,
expirationDate,
pemEncodedCertificate,
tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_client_certificate"
    values={[
        { label: 'delete_client_certificate', value: 'delete_client_certificate' }
    ]}
>
<TabItem value="delete_client_certificate">

Deletes the ClientCertificate resource.

```sql
DELETE FROM aws.apigateway.client_certificates
WHERE clientcertificate_id = '{{ clientcertificate_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
