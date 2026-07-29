--- 
title: domain_object_types
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_object_types
  - customer_profiles
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

Creates, updates, deletes, gets or lists a <code>domain_object_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domain_object_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.customer_profiles.domain_object_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_domain_object_type"
    values={[
        { label: 'get_domain_object_type', value: 'get_domain_object_type' },
        { label: 'list_domain_object_types', value: 'list_domain_object_types' }
    ]}
>
<TabItem value="get_domain_object_type">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the domain object type was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the domain object type.</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_key" /></td>
    <td><code>string</code></td>
    <td>The customer provided KMS key used to encrypt this type of domain object.</td>
</tr>
<tr>
    <td><CopyableCode code="fields" /></td>
    <td><code>object</code></td>
    <td>A map of field names to their corresponding domain object type field definitions.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the domain object type was most recently edited.</td>
</tr>
<tr>
    <td><CopyableCode code="object_type_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the domain object type. (pattern: &lt;code&gt;^&#91;a-zA-Z_&#93;&#91;a-zA-Z_0-9-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_domain_object_types">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the domain object type was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description explaining the purpose and characteristics of this object type.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the domain object type was most recently edited.</td>
</tr>
<tr>
    <td><CopyableCode code="object_type_name" /></td>
    <td><code>string</code></td>
    <td>The name that identifies the object type within the domain. (pattern: &lt;code&gt;^&#91;a-zA-Z_&#93;&#91;a-zA-Z_0-9-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
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
    <td><a href="#get_domain_object_type"><CopyableCode code="get_domain_object_type" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-object_type_name"><code>object_type_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Return a DomainObjectType for the input Domain and ObjectType names.</td>
</tr>
<tr>
    <td><a href="#list_domain_object_types"><CopyableCode code="list_domain_object_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>List all DomainObjectType(s) in a Customer Profiles domain.</td>
</tr>
<tr>
    <td><a href="#put_domain_object_type"><CopyableCode code="put_domain_object_type" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-object_type_name"><code>object_type_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Create/Update a DomainObjectType in a Customer Profiles domain. To create a new DomainObjectType, Data Store needs to be enabled on the Domain.</td>
</tr>
<tr>
    <td><a href="#delete_domain_object_type"><CopyableCode code="delete_domain_object_type" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-object_type_name"><code>object_type_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a DomainObjectType for the given Domain and ObjectType name.</td>
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
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the domain.</td>
</tr>
<tr id="parameter-object_type_name">
    <td><CopyableCode code="object_type_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the domain object type.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of domain object types returned per page.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The pagination token from the previous call to ListDomainObjectTypes.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_domain_object_type"
    values={[
        { label: 'get_domain_object_type', value: 'get_domain_object_type' },
        { label: 'list_domain_object_types', value: 'list_domain_object_types' }
    ]}
>
<TabItem value="get_domain_object_type">

Return a DomainObjectType for the input Domain and ObjectType names.

```sql
SELECT
created_at,
description,
encryption_key,
fields,
last_updated_at,
object_type_name,
tags
FROM aws.customer_profiles.domain_object_types
WHERE domain_name = '{{ domain_name }}' -- required
AND object_type_name = '{{ object_type_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_domain_object_types">

List all DomainObjectType(s) in a Customer Profiles domain.

```sql
SELECT
created_at,
description,
last_updated_at,
object_type_name,
tags
FROM aws.customer_profiles.domain_object_types
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_domain_object_type"
    values={[
        { label: 'put_domain_object_type', value: 'put_domain_object_type' }
    ]}
>
<TabItem value="put_domain_object_type">

Create/Update a DomainObjectType in a Customer Profiles domain. To create a new DomainObjectType, Data Store needs to be enabled on the Domain.

```sql
REPLACE aws.customer_profiles.domain_object_types
SET 
Description = '{{ Description }}',
EncryptionKey = '{{ EncryptionKey }}',
Fields = '{{ Fields }}',
Tags = '{{ Tags }}'
WHERE 
domain_name = '{{ domain_name }}' --required
AND object_type_name = '{{ object_type_name }}' --required
AND region = '{{ region }}' --required
RETURNING
created_at,
description,
encryption_key,
fields,
last_updated_at,
object_type_name,
tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_domain_object_type"
    values={[
        { label: 'delete_domain_object_type', value: 'delete_domain_object_type' }
    ]}
>
<TabItem value="delete_domain_object_type">

Delete a DomainObjectType for the given Domain and ObjectType name.

```sql
DELETE FROM aws.customer_profiles.domain_object_types
WHERE domain_name = '{{ domain_name }}' --required
AND object_type_name = '{{ object_type_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
