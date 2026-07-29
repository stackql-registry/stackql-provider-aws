--- 
title: usage_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - usage_profiles
  - glue
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

Creates, updates, deletes, gets or lists a <code>usage_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="usage_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.usage_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_usage_profile"
    values={[
        { label: 'get_usage_profile', value: 'get_usage_profile' }
    ]}
>
<TabItem value="get_usage_profile">

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
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>A ProfileConfiguration object specifying the job and session values for the profile.</td>
</tr>
<tr>
    <td><CopyableCode code="created_on" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the usage profile was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the usage profile. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_on" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the usage profile was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the usage profile. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#get_usage_profile"><CopyableCode code="get_usage_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the specified Glue usage profile.</td>
</tr>
<tr>
    <td><a href="#create_usage_profile"><CopyableCode code="create_usage_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates an Glue usage profile.</td>
</tr>
<tr>
    <td><a href="#update_usage_profile"><CopyableCode code="update_usage_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update an Glue usage profile.</td>
</tr>
<tr>
    <td><a href="#delete_usage_profile"><CopyableCode code="delete_usage_profile" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the Glue specified usage profile.</td>
</tr>
<tr>
    <td><a href="#list_usage_profiles"><CopyableCode code="list_usage_profiles" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List all the Glue usage profiles.</td>
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
    defaultValue="get_usage_profile"
    values={[
        { label: 'get_usage_profile', value: 'get_usage_profile' }
    ]}
>
<TabItem value="get_usage_profile">

Retrieves information about the specified Glue usage profile.

```sql
SELECT
configuration,
created_on,
description,
last_modified_on,
name
FROM aws.glue.usage_profiles
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_usage_profile"
    values={[
        { label: 'create_usage_profile', value: 'create_usage_profile' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_usage_profile">

Creates an Glue usage profile.

```sql
INSERT INTO aws.glue.usage_profiles (
Name,
Description,
Configuration,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ Configuration }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: usage_profiles
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the usage_profiles resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the usage profile.
    - name: Description
      value: "{{ Description }}"
      description: |
        A description of the usage profile.
    - name: Configuration
      description: |
        A ProfileConfiguration object specifying the job and session values for the profile.
      value:
        SessionConfiguration: "{{ SessionConfiguration }}"
        JobConfiguration: "{{ JobConfiguration }}"
    - name: Tags
      value: "{{ Tags }}"
      description: |
        A list of tags applied to the usage profile.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_usage_profile"
    values={[
        { label: 'update_usage_profile', value: 'update_usage_profile' }
    ]}
>
<TabItem value="update_usage_profile">

Update an Glue usage profile.

```sql
UPDATE aws.glue.usage_profiles
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
Configuration = '{{ Configuration }}'
WHERE 
region = '{{ region }}' --required
RETURNING
name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_usage_profile"
    values={[
        { label: 'delete_usage_profile', value: 'delete_usage_profile' }
    ]}
>
<TabItem value="delete_usage_profile">

Deletes the Glue specified usage profile.

```sql
DELETE FROM aws.glue.usage_profiles
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_usage_profiles"
    values={[
        { label: 'list_usage_profiles', value: 'list_usage_profiles' }
    ]}
>
<TabItem value="list_usage_profiles">

List all the Glue usage profiles.

```sql
EXEC aws.glue.usage_profiles.list_usage_profiles 
@region='{{ region }}' --required 
@@json=
'{
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}
}'
;
```
</TabItem>
</Tabs>
