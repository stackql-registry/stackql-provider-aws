--- 
title: profile_objects
hide_title: false
hide_table_of_contents: false
keywords:
  - profile_objects
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

Creates, updates, deletes, gets or lists a <code>profile_objects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="profile_objects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.customer_profiles.profile_objects" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_profile_objects"
    values={[
        { label: 'list_profile_objects', value: 'list_profile_objects' }
    ]}
>
<TabItem value="list_profile_objects">

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
    <td><CopyableCode code="Items" /></td>
    <td><code>array</code></td>
    <td>The list of ListProfileObject instances.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token from the previous call to ListProfileObjects.</td>
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
    <td><a href="#list_profile_objects"><CopyableCode code="list_profile_objects" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Returns a list of objects associated with a profile of a given ProfileObjectType.</td>
</tr>
<tr>
    <td><a href="#put_profile_object"><CopyableCode code="put_profile_object" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ObjectTypeName"><code>ObjectTypeName</code></a>, <a href="#parameter-Object"><code>Object</code></a></td>
    <td></td>
    <td>Adds additional objects to customer profiles of a given ObjectType. When adding a specific profile object, like a Contact Record, an inferred profile can get created if it is not mapped to an existing profile. The resulting profile will only have a phone number populated in the standard ProfileObject. Any additional Contact Records with the same phone number will be mapped to the same inferred profile. When a ProfileObject is created and if a ProfileObjectType already exists for the ProfileObject, it will provide data to a standard profile depending on the ProfileObjectType definition. PutProfileObject needs an ObjectType, which can be created using PutProfileObjectType.</td>
</tr>
<tr>
    <td><a href="#delete_profile_object"><CopyableCode code="delete_profile_object" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes an object associated with a profile of a given ProfileObjectType.</td>
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
    <td>The pagination token from the previous call to ListProfileObjects.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_profile_objects"
    values={[
        { label: 'list_profile_objects', value: 'list_profile_objects' }
    ]}
>
<TabItem value="list_profile_objects">

Returns a list of objects associated with a profile of a given ProfileObjectType.

```sql
SELECT
Items,
NextToken
FROM aws.customer_profiles.profile_objects
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
    defaultValue="put_profile_object"
    values={[
        { label: 'put_profile_object', value: 'put_profile_object' }
    ]}
>
<TabItem value="put_profile_object">

Adds additional objects to customer profiles of a given ObjectType. When adding a specific profile object, like a Contact Record, an inferred profile can get created if it is not mapped to an existing profile. The resulting profile will only have a phone number populated in the standard ProfileObject. Any additional Contact Records with the same phone number will be mapped to the same inferred profile. When a ProfileObject is created and if a ProfileObjectType already exists for the ProfileObject, it will provide data to a standard profile depending on the ProfileObjectType definition. PutProfileObject needs an ObjectType, which can be created using PutProfileObjectType.

```sql
REPLACE aws.customer_profiles.profile_objects
SET 
ObjectTypeName = '{{ ObjectTypeName }}',
Object = '{{ Object }}'
WHERE 
domain_name = '{{ domain_name }}' --required
AND region = '{{ region }}' --required
AND ObjectTypeName = '{{ ObjectTypeName }}' --required
AND Object = '{{ Object }}' --required
RETURNING
ProfileObjectUniqueKey;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_profile_object"
    values={[
        { label: 'delete_profile_object', value: 'delete_profile_object' }
    ]}
>
<TabItem value="delete_profile_object">

Removes an object associated with a profile of a given ProfileObjectType.

```sql
DELETE FROM aws.customer_profiles.profile_objects
WHERE domain_name = '{{ domain_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
