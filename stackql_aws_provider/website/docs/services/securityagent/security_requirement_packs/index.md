--- 
title: security_requirement_packs
hide_title: false
hide_table_of_contents: false
keywords:
  - security_requirement_packs
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

Creates, updates, deletes, gets or lists a <code>security_requirement_packs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="security_requirement_packs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityagent.security_requirement_packs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_security_requirement_pack"
    values={[
        { label: 'get_security_requirement_pack', value: 'get_security_requirement_pack' },
        { label: 'list_security_requirement_packs', value: 'list_security_requirement_packs' }
    ]}
>
<TabItem value="get_security_requirement_pack">

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
    <td>The name of the security requirement pack.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the security requirement pack was created, in UTC format.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the security requirement pack.</td>
</tr>
<tr>
    <td><CopyableCode code="import_status" /></td>
    <td><code>string</code></td>
    <td>The status of the security requirements import workflow for this pack. (PENDING, IN_PROGRESS, FAILED, COMPLETED)</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of a KMS key. Can be a key ID, key ARN, alias name, or alias ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="management_type" /></td>
    <td><code>string</code></td>
    <td>The management type of the pack. Valid values are AWS_MANAGED and CUSTOMER_MANAGED. (AWS_MANAGED, CUSTOMER_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="pack_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the security requirement pack.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the security requirement pack. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the security requirement pack was last updated, in UTC format.</td>
</tr>
<tr>
    <td><CopyableCode code="vendor_name" /></td>
    <td><code>string</code></td>
    <td>The vendor name for AWS managed packs, such as ISO or NIST.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_security_requirement_packs">

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
    <td>The name of the security requirement pack.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the security requirement pack was created, in UTC format.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the security requirement pack.</td>
</tr>
<tr>
    <td><CopyableCode code="management_type" /></td>
    <td><code>string</code></td>
    <td>The management type of the pack. (AWS_MANAGED, CUSTOMER_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="pack_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the security requirement pack.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the security requirement pack. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the security requirement pack was last updated, in UTC format.</td>
</tr>
<tr>
    <td><CopyableCode code="vendor_name" /></td>
    <td><code>string</code></td>
    <td>The vendor name for AWS managed packs.</td>
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
    <td><a href="#get_security_requirement_pack"><CopyableCode code="get_security_requirement_pack" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a security requirement pack.</td>
</tr>
<tr>
    <td><a href="#list_security_requirement_packs"><CopyableCode code="list_security_requirement_packs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all security requirement packs in the caller's account.</td>
</tr>
<tr>
    <td><a href="#create_security_requirement_pack"><CopyableCode code="create_security_requirement_pack" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a customer managed security requirement pack.</td>
</tr>
<tr>
    <td><a href="#update_security_requirement_pack"><CopyableCode code="update_security_requirement_pack" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-packId"><code>packId</code></a></td>
    <td></td>
    <td>Updates a security requirement pack. For customer managed packs, both metadata and status can be updated. For AWS managed packs, only status can be updated.</td>
</tr>
<tr>
    <td><a href="#delete_security_requirement_pack"><CopyableCode code="delete_security_requirement_pack" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a customer managed security requirement pack and all its associated security requirements.</td>
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
    defaultValue="get_security_requirement_pack"
    values={[
        { label: 'get_security_requirement_pack', value: 'get_security_requirement_pack' },
        { label: 'list_security_requirement_packs', value: 'list_security_requirement_packs' }
    ]}
>
<TabItem value="get_security_requirement_pack">

Retrieves information about a security requirement pack.

```sql
SELECT
name,
created_at,
description,
import_status,
kms_key_id,
management_type,
pack_id,
status,
updated_at,
vendor_name
FROM aws.securityagent.security_requirement_packs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_security_requirement_packs">

Lists all security requirement packs in the caller's account.

```sql
SELECT
name,
created_at,
description,
management_type,
pack_id,
status,
updated_at,
vendor_name
FROM aws.securityagent.security_requirement_packs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_security_requirement_pack"
    values={[
        { label: 'create_security_requirement_pack', value: 'create_security_requirement_pack' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_security_requirement_pack">

Creates a customer managed security requirement pack.

```sql
INSERT INTO aws.securityagent.security_requirement_packs (
name,
description,
status,
kmsKeyId,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ status }}',
'{{ kmsKeyId }}',
'{{ tags }}',
'{{ region }}'
RETURNING
kms_key_id,
pack_id,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: security_requirement_packs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the security_requirement_packs resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: status
      value: "{{ status }}"
      valid_values: ['ENABLED', 'DISABLED']
    - name: kmsKeyId
      value: "{{ kmsKeyId }}"
      description: |
        Identifier of a KMS key. Can be a key ID, key ARN, alias name, or alias ARN.
    - name: tags
      value: "{{ tags }}"
      description: |
        Map of tags for a resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_security_requirement_pack"
    values={[
        { label: 'update_security_requirement_pack', value: 'update_security_requirement_pack' }
    ]}
>
<TabItem value="update_security_requirement_pack">

Updates a security requirement pack. For customer managed packs, both metadata and status can be updated. For AWS managed packs, only status can be updated.

```sql
UPDATE aws.securityagent.security_requirement_packs
SET 
packId = '{{ packId }}',
name = '{{ name }}',
description = '{{ description }}',
status = '{{ status }}'
WHERE 
region = '{{ region }}' --required
AND packId = '{{ packId }}' --required
RETURNING
name,
description,
pack_id,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_security_requirement_pack"
    values={[
        { label: 'delete_security_requirement_pack', value: 'delete_security_requirement_pack' }
    ]}
>
<TabItem value="delete_security_requirement_pack">

Deletes a customer managed security requirement pack and all its associated security requirements.

```sql
DELETE FROM aws.securityagent.security_requirement_packs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
