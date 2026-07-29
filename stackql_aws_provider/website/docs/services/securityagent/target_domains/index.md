--- 
title: target_domains
hide_title: false
hide_table_of_contents: false
keywords:
  - target_domains
  - securityagent
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

Creates, updates, deletes, gets or lists a <code>target_domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="target_domains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityagent.target_domains" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_target_domains"
    values={[
        { label: 'batch_get_target_domains', value: 'batch_get_target_domains' },
        { label: 'list_target_domains', value: 'list_target_domains' }
    ]}
>
<TabItem value="batch_get_target_domains">

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
    <td><CopyableCode code="not_found" /></td>
    <td><code>array</code></td>
    <td>List of target domain IDs.</td>
</tr>
<tr>
    <td><CopyableCode code="target_domains" /></td>
    <td><code>array</code></td>
    <td>The list of target domains that were found.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_target_domains">

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
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The domain name of the target domain.</td>
</tr>
<tr>
    <td><CopyableCode code="target_domain_id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of the target domain.</td>
</tr>
<tr>
    <td><CopyableCode code="verification_status" /></td>
    <td><code>string</code></td>
    <td>The current verification status of the target domain. (PENDING, VERIFIED, FAILED, UNREACHABLE)</td>
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
    <td><a href="#batch_get_target_domains"><CopyableCode code="batch_get_target_domains" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about one or more target domains.</td>
</tr>
<tr>
    <td><a href="#list_target_domains"><CopyableCode code="list_target_domains" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a paginated list of target domain summaries in your account.</td>
</tr>
<tr>
    <td><a href="#create_target_domain"><CopyableCode code="create_target_domain" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-targetDomainName"><code>targetDomainName</code></a>, <a href="#parameter-verificationMethod"><code>verificationMethod</code></a></td>
    <td></td>
    <td>Creates a new target domain for penetration testing. A target domain is a web domain that must be registered and verified before it can be tested.</td>
</tr>
<tr>
    <td><a href="#update_target_domain"><CopyableCode code="update_target_domain" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-targetDomainId"><code>targetDomainId</code></a>, <a href="#parameter-verificationMethod"><code>verificationMethod</code></a></td>
    <td></td>
    <td>Updates the verification method for a target domain.</td>
</tr>
<tr>
    <td><a href="#delete_target_domain"><CopyableCode code="delete_target_domain" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a target domain registration. After deletion, the domain can no longer be used for penetration testing.</td>
</tr>
<tr>
    <td><a href="#verify_target_domain"><CopyableCode code="verify_target_domain" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-targetDomainId"><code>targetDomainId</code></a></td>
    <td></td>
    <td>Initiates verification of a target domain. This checks whether the domain ownership verification token has been properly configured.</td>
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
    defaultValue="batch_get_target_domains"
    values={[
        { label: 'batch_get_target_domains', value: 'batch_get_target_domains' },
        { label: 'list_target_domains', value: 'list_target_domains' }
    ]}
>
<TabItem value="batch_get_target_domains">

Retrieves information about one or more target domains.

```sql
SELECT
not_found,
target_domains
FROM aws.securityagent.target_domains
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_target_domains">

Returns a paginated list of target domain summaries in your account.

```sql
SELECT
domain_name,
target_domain_id,
verification_status
FROM aws.securityagent.target_domains
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_target_domain"
    values={[
        { label: 'create_target_domain', value: 'create_target_domain' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_target_domain">

Creates a new target domain for penetration testing. A target domain is a web domain that must be registered and verified before it can be tested.

```sql
INSERT INTO aws.securityagent.target_domains (
targetDomainName,
verificationMethod,
tags,
region
)
SELECT 
'{{ targetDomainName }}' /* required */,
'{{ verificationMethod }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
created_at,
domain_name,
target_domain_id,
verification_details,
verification_status,
verification_status_reason,
verified_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: target_domains
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the target_domains resource.
    - name: targetDomainName
      value: "{{ targetDomainName }}"
    - name: verificationMethod
      value: "{{ verificationMethod }}"
      description: |
        Method used to verify domain ownership.
      valid_values: ['DNS_TXT', 'HTTP_ROUTE', 'PRIVATE_VPC']
    - name: tags
      value: "{{ tags }}"
      description: |
        Map of tags for a resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_target_domain"
    values={[
        { label: 'update_target_domain', value: 'update_target_domain' }
    ]}
>
<TabItem value="update_target_domain">

Updates the verification method for a target domain.

```sql
UPDATE aws.securityagent.target_domains
SET 
targetDomainId = '{{ targetDomainId }}',
verificationMethod = '{{ verificationMethod }}'
WHERE 
region = '{{ region }}' --required
AND targetDomainId = '{{ targetDomainId }}' --required
AND verificationMethod = '{{ verificationMethod }}' --required
RETURNING
created_at,
domain_name,
target_domain_id,
verification_details,
verification_status,
verification_status_reason,
verified_at;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_target_domain"
    values={[
        { label: 'delete_target_domain', value: 'delete_target_domain' }
    ]}
>
<TabItem value="delete_target_domain">

Deletes a target domain registration. After deletion, the domain can no longer be used for penetration testing.

```sql
DELETE FROM aws.securityagent.target_domains
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="verify_target_domain"
    values={[
        { label: 'verify_target_domain', value: 'verify_target_domain' }
    ]}
>
<TabItem value="verify_target_domain">

Initiates verification of a target domain. This checks whether the domain ownership verification token has been properly configured.

```sql
EXEC aws.securityagent.target_domains.verify_target_domain 
@region='{{ region }}' --required 
@@json=
'{
"targetDomainId": "{{ targetDomainId }}"
}'
;
```
</TabItem>
</Tabs>
