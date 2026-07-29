--- 
title: profile_object_types
hide_title: false
hide_table_of_contents: false
keywords:
  - profile_object_types
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

Creates, updates, deletes, gets or lists a <code>profile_object_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="profile_object_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.customer_profiles.profile_object_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_profile_object_type"
    values={[
        { label: 'get_profile_object_type', value: 'get_profile_object_type' },
        { label: 'list_profile_object_types', value: 'list_profile_object_types' }
    ]}
>
<TabItem value="get_profile_object_type">

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
    <td><CopyableCode code="allow_profile_creation" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether a profile should be created when data is received if one doesn’t exist for an object of this type. The default is FALSE. If the AllowProfileCreation flag is set to FALSE, then the service tries to fetch a standard profile and associate this object with the profile. If it is set to TRUE, and if no match is found, then the service creates a new standard profile.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the domain was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the profile object type.</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_key" /></td>
    <td><code>string</code></td>
    <td>The customer-provided key to encrypt the profile object that will be created in this profile object type.</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_days" /></td>
    <td><code>integer</code></td>
    <td>The number of days until the data in the object expires.</td>
</tr>
<tr>
    <td><CopyableCode code="fields" /></td>
    <td><code>object</code></td>
    <td>A map of the name and ObjectType field.</td>
</tr>
<tr>
    <td><CopyableCode code="keys" /></td>
    <td><code>object</code></td>
    <td>A list of unique keys that can be used to map data to the profile.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the domain was most recently edited.</td>
</tr>
<tr>
    <td><CopyableCode code="max_available_profile_object_count" /></td>
    <td><code>integer</code></td>
    <td>The amount of provisioned profile object max count available.</td>
</tr>
<tr>
    <td><CopyableCode code="max_profile_object_count" /></td>
    <td><code>integer</code></td>
    <td>The amount of profile object max count assigned to the object type.</td>
</tr>
<tr>
    <td><CopyableCode code="object_type_name" /></td>
    <td><code>string</code></td>
    <td>The name of the profile object type. (pattern: &lt;code&gt;^&#91;a-zA-Z_&#93;&#91;a-zA-Z_0-9-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_last_updated_timestamp_format" /></td>
    <td><code>string</code></td>
    <td>The format of your sourceLastUpdatedTimestamp that was previously set up.</td>
</tr>
<tr>
    <td><CopyableCode code="source_priority" /></td>
    <td><code>integer</code></td>
    <td>An integer that determines the priority of this object type when data from multiple sources is ingested. Lower values take priority. Object types without a specified source priority default to the lowest priority.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="template_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the object template. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_profile_object_types">

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
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>The list of ListProfileObjectTypes instances.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>Identifies the next page of results to return.</td>
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
    <td><a href="#get_profile_object_type"><CopyableCode code="get_profile_object_type" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-object_type_name"><code>object_type_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the object types for a specific domain.</td>
</tr>
<tr>
    <td><a href="#list_profile_object_types"><CopyableCode code="list_profile_object_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists all of the templates available within the service.</td>
</tr>
<tr>
    <td><a href="#put_profile_object_type"><CopyableCode code="put_profile_object_type" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-object_type_name"><code>object_type_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Defines a ProfileObjectType. To add or remove tags on an existing ObjectType, see TagResource/UntagResource.</td>
</tr>
<tr>
    <td><a href="#delete_profile_object_type"><CopyableCode code="delete_profile_object_type" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-object_type_name"><code>object_type_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a ProfileObjectType from a specific domain as well as removes all the ProfileObjects of that type. It also disables integrations from this specific ProfileObjectType. In addition, it scrubs all of the fields of the standard profile that were populated from this ProfileObjectType.</td>
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
    <td>The name of the profile object type.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of objects returned per page.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>Identifies the next page of results to return.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_profile_object_type"
    values={[
        { label: 'get_profile_object_type', value: 'get_profile_object_type' },
        { label: 'list_profile_object_types', value: 'list_profile_object_types' }
    ]}
>
<TabItem value="get_profile_object_type">

Returns the object types for a specific domain.

```sql
SELECT
allow_profile_creation,
created_at,
description,
encryption_key,
expiration_days,
fields,
keys,
last_updated_at,
max_available_profile_object_count,
max_profile_object_count,
object_type_name,
source_last_updated_timestamp_format,
source_priority,
tags,
template_id
FROM aws.customer_profiles.profile_object_types
WHERE domain_name = '{{ domain_name }}' -- required
AND object_type_name = '{{ object_type_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_profile_object_types">

Lists all of the templates available within the service.

```sql
SELECT
items,
next_token
FROM aws.customer_profiles.profile_object_types
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_profile_object_type"
    values={[
        { label: 'put_profile_object_type', value: 'put_profile_object_type' }
    ]}
>
<TabItem value="put_profile_object_type">

Defines a ProfileObjectType. To add or remove tags on an existing ObjectType, see TagResource/UntagResource.

```sql
REPLACE aws.customer_profiles.profile_object_types
SET 
Description = '{{ Description }}',
TemplateId = '{{ TemplateId }}',
ExpirationDays = {{ ExpirationDays }},
EncryptionKey = '{{ EncryptionKey }}',
AllowProfileCreation = {{ AllowProfileCreation }},
SourceLastUpdatedTimestampFormat = '{{ SourceLastUpdatedTimestampFormat }}',
MaxProfileObjectCount = {{ MaxProfileObjectCount }},
SourcePriority = {{ SourcePriority }},
Fields = '{{ Fields }}',
Keys = '{{ Keys }}',
Tags = '{{ Tags }}'
WHERE 
domain_name = '{{ domain_name }}' --required
AND object_type_name = '{{ object_type_name }}' --required
AND region = '{{ region }}' --required
RETURNING
allow_profile_creation,
created_at,
description,
encryption_key,
expiration_days,
fields,
keys,
last_updated_at,
max_available_profile_object_count,
max_profile_object_count,
object_type_name,
source_last_updated_timestamp_format,
source_priority,
tags,
template_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_profile_object_type"
    values={[
        { label: 'delete_profile_object_type', value: 'delete_profile_object_type' }
    ]}
>
<TabItem value="delete_profile_object_type">

Removes a ProfileObjectType from a specific domain as well as removes all the ProfileObjects of that type. It also disables integrations from this specific ProfileObjectType. In addition, it scrubs all of the fields of the standard profile that were populated from this ProfileObjectType.

```sql
DELETE FROM aws.customer_profiles.profile_object_types
WHERE domain_name = '{{ domain_name }}' --required
AND object_type_name = '{{ object_type_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
