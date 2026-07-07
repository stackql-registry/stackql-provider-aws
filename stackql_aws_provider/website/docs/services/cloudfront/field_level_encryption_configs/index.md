--- 
title: field_level_encryption_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - field_level_encryption_configs
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

Creates, updates, deletes, gets or lists a <code>field_level_encryption_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="field_level_encryption_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.field_level_encryption_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_field_level_encryption_config"
    values={[
        { label: 'get_field_level_encryption_config', value: 'get_field_level_encryption_config' },
        { label: 'list_field_level_encryption_configs', value: 'list_field_level_encryption_configs' }
    ]}
>
<TabItem value="get_field_level_encryption_config">

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
    <td><CopyableCode code="CallerReference" /></td>
    <td><code>string</code></td>
    <td>A unique number that ensures the request can't be replayed.</td>
</tr>
<tr>
    <td><CopyableCode code="Comment" /></td>
    <td><code>string</code></td>
    <td>An optional comment about the configuration. The comment cannot be longer than 128 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="ContentTypeProfileConfig" /></td>
    <td><code>string</code></td>
    <td>A complex data type that specifies when to forward content if a content type isn't recognized and profiles to use as by default in a request if a query argument doesn't specify a profile to use.</td>
</tr>
<tr>
    <td><CopyableCode code="QueryArgProfileConfig" /></td>
    <td><code>string</code></td>
    <td>A complex data type that specifies when to forward content if a profile isn't found and the profile that can be provided as a query argument in a request.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_field_level_encryption_configs">

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
    <td><code>string</code></td>
    <td>An array of field-level encryption items.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of elements you want in the response body.</td>
</tr>
<tr>
    <td><CopyableCode code="NextMarker" /></td>
    <td><code>string</code></td>
    <td>If there are more elements to be listed, this element is present and contains the value that you can use for the Marker request parameter to continue listing your configurations where you left off.</td>
</tr>
<tr>
    <td><CopyableCode code="Quantity" /></td>
    <td><code>integer</code></td>
    <td>The number of field-level encryption items.</td>
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
    <td><a href="#get_field_level_encryption_config"><CopyableCode code="get_field_level_encryption_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the field-level encryption configuration information.</td>
</tr>
<tr>
    <td><a href="#list_field_level_encryption_configs"><CopyableCode code="list_field_level_encryption_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>List all field-level encryption configurations that have been created in CloudFront for this account.</td>
</tr>
<tr>
    <td><a href="#create_field_level_encryption_config"><CopyableCode code="create_field_level_encryption_config" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FieldLevelEncryptionConfig"><code>FieldLevelEncryptionConfig</code></a></td>
    <td></td>
    <td>Create a new field-level encryption configuration.</td>
</tr>
<tr>
    <td><a href="#update_field_level_encryption_config"><CopyableCode code="update_field_level_encryption_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FieldLevelEncryptionConfig"><code>FieldLevelEncryptionConfig</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a></td>
    <td>Update a field-level encryption configuration.</td>
</tr>
<tr>
    <td><a href="#delete_field_level_encryption_config"><CopyableCode code="delete_field_level_encryption_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a></td>
    <td>Remove a field-level encryption configuration.</td>
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
    <td>The ID of the configuration you want to delete from CloudFront.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-If-Match">
    <td><CopyableCode code="If-Match" /></td>
    <td><code>string</code></td>
    <td>The value of the ETag header that you received when retrieving the configuration identity to delete. For example: E2QWRUHAPOMQZL.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Use this when paginating results to indicate where to begin in your list of configurations. The results include configurations in the list that occur after the marker. To get the next page of results, set the Marker to the value of the NextMarker from the current page's response (which is also the ID of the last configuration on that page).</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>string</code></td>
    <td>The maximum number of field-level encryption configurations you want in the response body.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_field_level_encryption_config"
    values={[
        { label: 'get_field_level_encryption_config', value: 'get_field_level_encryption_config' },
        { label: 'list_field_level_encryption_configs', value: 'list_field_level_encryption_configs' }
    ]}
>
<TabItem value="get_field_level_encryption_config">

Get the field-level encryption configuration information.

```sql
SELECT
CallerReference,
Comment,
ContentTypeProfileConfig,
QueryArgProfileConfig
FROM aws.cloudfront.field_level_encryption_configs
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_field_level_encryption_configs">

List all field-level encryption configurations that have been created in CloudFront for this account.

```sql
SELECT
Items,
MaxItems,
NextMarker,
Quantity
FROM aws.cloudfront.field_level_encryption_configs
WHERE region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_field_level_encryption_config"
    values={[
        { label: 'create_field_level_encryption_config', value: 'create_field_level_encryption_config' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_field_level_encryption_config">

Create a new field-level encryption configuration.

```sql
INSERT INTO aws.cloudfront.field_level_encryption_configs (
FieldLevelEncryptionConfig,
region
)
SELECT 
'{{ FieldLevelEncryptionConfig }}' /* required */,
'{{ region }}'
RETURNING
ETag,
FieldLevelEncryption,
Location
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: field_level_encryption_configs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the field_level_encryption_configs resource.
    - name: FieldLevelEncryptionConfig
      description: |
        A complex data type that includes the profile configurations specified for field-level encryption.
      value:
        CallerReference: "{{ CallerReference }}"
        Comment: "{{ Comment }}"
        QueryArgProfileConfig:
          ForwardWhenQueryArgProfileIsUnknown: {{ ForwardWhenQueryArgProfileIsUnknown }}
          QueryArgProfiles:
            Quantity: {{ Quantity }}
            Items:
              - QueryArg: "{{ QueryArg }}"
                ProfileId: "{{ ProfileId }}"
        ContentTypeProfileConfig:
          ForwardWhenContentTypeIsUnknown: {{ ForwardWhenContentTypeIsUnknown }}
          ContentTypeProfiles:
            Quantity: {{ Quantity }}
            Items:
              - Format: "{{ Format }}"
                ProfileId: "{{ ProfileId }}"
                ContentType: "{{ ContentType }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_field_level_encryption_config"
    values={[
        { label: 'update_field_level_encryption_config', value: 'update_field_level_encryption_config' }
    ]}
>
<TabItem value="update_field_level_encryption_config">

Update a field-level encryption configuration.

```sql
UPDATE aws.cloudfront.field_level_encryption_configs
SET 
FieldLevelEncryptionConfig = '{{ FieldLevelEncryptionConfig }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND FieldLevelEncryptionConfig = '{{ FieldLevelEncryptionConfig }}' --required
AND `If-Match` = '{{ If-Match}}'
RETURNING
ETag,
FieldLevelEncryption;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_field_level_encryption_config"
    values={[
        { label: 'delete_field_level_encryption_config', value: 'delete_field_level_encryption_config' }
    ]}
>
<TabItem value="delete_field_level_encryption_config">

Remove a field-level encryption configuration.

```sql
DELETE FROM aws.cloudfront.field_level_encryption_configs
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND `If-Match` = '{{ If-Match }}'
;
```
</TabItem>
</Tabs>
