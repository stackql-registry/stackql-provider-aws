--- 
title: field_level_encryption_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - field_level_encryption_profiles
  - cloudfront
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

Creates, updates, deletes, gets or lists a <code>field_level_encryption_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="field_level_encryption_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.field_level_encryption_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_field_level_encryption_profile"
    values={[
        { label: 'get_field_level_encryption_profile', value: 'get_field_level_encryption_profile' },
        { label: 'list_field_level_encryption_profiles', value: 'list_field_level_encryption_profiles' }
    ]}
>
<TabItem value="get_field_level_encryption_profile">

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
    <td><CopyableCode code="field_level_encryption_profile_config" /></td>
    <td><code>string</code></td>
    <td>A complex data type that includes the profile name and the encryption entities for the field-level encryption profile.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID for a field-level encryption profile configuration which includes a set of profiles that specify certain selected data fields to be encrypted by specific public keys.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string</code></td>
    <td>The last time the field-level encryption profile was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_field_level_encryption_profiles">

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
    <td><code>string</code></td>
    <td>The field-level encryption profile items.</td>
</tr>
<tr>
    <td><CopyableCode code="max_items" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of field-level encryption profiles you want in the response body.</td>
</tr>
<tr>
    <td><CopyableCode code="next_marker" /></td>
    <td><code>string</code></td>
    <td>If there are more elements to be listed, this element is present and contains the value that you can use for the Marker request parameter to continue listing your profiles where you left off.</td>
</tr>
<tr>
    <td><CopyableCode code="quantity" /></td>
    <td><code>integer</code></td>
    <td>The number of field-level encryption profiles.</td>
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
    <td><a href="#get_field_level_encryption_profile"><CopyableCode code="get_field_level_encryption_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the field-level encryption profile information.</td>
</tr>
<tr>
    <td><a href="#list_field_level_encryption_profiles"><CopyableCode code="list_field_level_encryption_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Request a list of field-level encryption profiles that have been created in CloudFront for this account.</td>
</tr>
<tr>
    <td><a href="#create_field_level_encryption_profile"><CopyableCode code="create_field_level_encryption_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FieldLevelEncryptionProfileConfig"><code>FieldLevelEncryptionProfileConfig</code></a></td>
    <td></td>
    <td>Create a field-level encryption profile.</td>
</tr>
<tr>
    <td><a href="#update_field_level_encryption_profile"><CopyableCode code="update_field_level_encryption_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FieldLevelEncryptionProfileConfig"><code>FieldLevelEncryptionProfileConfig</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a></td>
    <td>Update a field-level encryption profile.</td>
</tr>
<tr>
    <td><a href="#delete_field_level_encryption_profile"><CopyableCode code="delete_field_level_encryption_profile" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a></td>
    <td>Remove a field-level encryption profile.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Request the ID of the profile you want to delete from CloudFront.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-If-Match">
    <td><CopyableCode code="If-Match" /></td>
    <td><code>string</code></td>
    <td>The value of the ETag header that you received when retrieving the profile to delete. For example: E2QWRUHAPOMQZL.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Use this when paginating results to indicate where to begin in your list of profiles. The results include profiles in the list that occur after the marker. To get the next page of results, set the Marker to the value of the NextMarker from the current page's response (which is also the ID of the last profile on that page).</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>string</code></td>
    <td>The maximum number of field-level encryption profiles you want in the response body.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_field_level_encryption_profile"
    values={[
        { label: 'get_field_level_encryption_profile', value: 'get_field_level_encryption_profile' },
        { label: 'list_field_level_encryption_profiles', value: 'list_field_level_encryption_profiles' }
    ]}
>
<TabItem value="get_field_level_encryption_profile">

Get the field-level encryption profile information.

```sql
SELECT
field_level_encryption_profile_config,
id,
last_modified_time
FROM aws.cloudfront.field_level_encryption_profiles
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_field_level_encryption_profiles">

Request a list of field-level encryption profiles that have been created in CloudFront for this account.

```sql
SELECT
items,
max_items,
next_marker,
quantity
FROM aws.cloudfront.field_level_encryption_profiles
WHERE region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_field_level_encryption_profile"
    values={[
        { label: 'create_field_level_encryption_profile', value: 'create_field_level_encryption_profile' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_field_level_encryption_profile">

Create a field-level encryption profile.

```sql
INSERT INTO aws.cloudfront.field_level_encryption_profiles (
FieldLevelEncryptionProfileConfig,
region
)
SELECT 
'{{ FieldLevelEncryptionProfileConfig }}' /* required */,
'{{ region }}'
RETURNING
field_level_encryption_profile_config,
id,
last_modified_time
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: field_level_encryption_profiles
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the field_level_encryption_profiles resource.
    - name: FieldLevelEncryptionProfileConfig
      description: |
        A complex data type of profiles for the field-level encryption.
      value:
        Name: "{{ Name }}"
        CallerReference: "{{ CallerReference }}"
        Comment: "{{ Comment }}"
        EncryptionEntities:
          Quantity: {{ Quantity }}
          Items:
            - PublicKeyId: "{{ PublicKeyId }}"
              ProviderId: "{{ ProviderId }}"
              FieldPatterns:
                Quantity: {{ Quantity }}
                Items:
                  - "{{ Items }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_field_level_encryption_profile"
    values={[
        { label: 'update_field_level_encryption_profile', value: 'update_field_level_encryption_profile' }
    ]}
>
<TabItem value="update_field_level_encryption_profile">

Update a field-level encryption profile.

```sql
UPDATE aws.cloudfront.field_level_encryption_profiles
SET 
FieldLevelEncryptionProfileConfig = '{{ FieldLevelEncryptionProfileConfig }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND FieldLevelEncryptionProfileConfig = '{{ FieldLevelEncryptionProfileConfig }}' --required
AND `If-Match` = '{{ If-Match}}'
RETURNING
field_level_encryption_profile_config,
id,
last_modified_time;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_field_level_encryption_profile"
    values={[
        { label: 'delete_field_level_encryption_profile', value: 'delete_field_level_encryption_profile' }
    ]}
>
<TabItem value="delete_field_level_encryption_profile">

Remove a field-level encryption profile.

```sql
DELETE FROM aws.cloudfront.field_level_encryption_profiles
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND `If-Match` = '{{ If-Match }}'
;
```
</TabItem>
</Tabs>
