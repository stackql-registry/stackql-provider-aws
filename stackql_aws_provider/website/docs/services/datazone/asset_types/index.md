--- 
title: asset_types
hide_title: false
hide_table_of_contents: false
keywords:
  - asset_types
  - datazone
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

Creates, updates, deletes, gets or lists an <code>asset_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="asset_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.asset_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_asset_type"
    values={[
        { label: 'get_asset_type', value: 'get_asset_type' }
    ]}
>
<TabItem value="get_asset_type">

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
    <td>The name of the asset type. (pattern: &lt;code&gt;&#91;^\.&#93;*.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the asset type was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone user who created the asset type.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the asset type.</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone domain in which the asset type exists. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="formsOutput" /></td>
    <td><code>object</code></td>
    <td>The metadata forms attached to the asset type.</td>
</tr>
<tr>
    <td><CopyableCode code="originDomainId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone domain in which the asset type was originally created. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="originProjectId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone project in which the asset type was originally created. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owningProjectId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone project that owns the asset type. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="revision" /></td>
    <td><code>string</code></td>
    <td>The revision of the asset type.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the asset type was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedBy" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone user that updated the asset type.</td>
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
    <td><a href="#get_asset_type"><CopyableCode code="get_asset_type" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-revision"><code>revision</code></a></td>
    <td>Gets an Amazon DataZone asset type. Asset types define the categories and characteristics of different kinds of data assets within Amazon DataZone.. They determine what metadata fields are required, what operations are possible, and how the asset integrates with other Amazon Web Services services. Asset types can range from built-in types like Amazon S3 buckets and Amazon Web Services Glue tables to custom types defined for specific organizational needs. Understanding asset types is crucial for properly organizing and managing different kinds of data resources. Prerequisites: The asset type with identifier must exist in the domain. ResourceNotFoundException. You must have the GetAssetType permission. Ensure the domain-identifier value is correct and accessible.</td>
</tr>
<tr>
    <td><a href="#create_asset_type"><CopyableCode code="create_asset_type" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-formsInput"><code>formsInput</code></a>, <a href="#parameter-owningProjectIdentifier"><code>owningProjectIdentifier</code></a></td>
    <td></td>
    <td>Creates a custom asset type. Prerequisites: The formsInput field is required, however, can be passed as empty (e.g. -forms-input &#123;&#125;). You must have CreateAssetType permissions. The domain-identifier and owning-project-identifier must be valid and active. The name of the asset type must be unique within the domain — duplicate names will cause failure. JSON input must be valid — incorrect formatting causes Invalid JSON errors.</td>
</tr>
<tr>
    <td><a href="#delete_asset_type"><CopyableCode code="delete_asset_type" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an asset type in Amazon DataZone. Prerequisites: The asset type must exist in the domain. You must have DeleteAssetType permission. The asset type must not be in use (e.g., assigned to any asset). If used, deletion will fail. You should retrieve the asset type using get-asset-type to confirm its presence before deletion.</td>
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
<tr id="parameter-domain_identifier">
    <td><CopyableCode code="domain_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone domain in which the asset type is deleted.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the asset type that is deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-revision">
    <td><CopyableCode code="revision" /></td>
    <td><code>string</code></td>
    <td>The revision of the asset type.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_asset_type"
    values={[
        { label: 'get_asset_type', value: 'get_asset_type' }
    ]}
>
<TabItem value="get_asset_type">

Gets an Amazon DataZone asset type. Asset types define the categories and characteristics of different kinds of data assets within Amazon DataZone.. They determine what metadata fields are required, what operations are possible, and how the asset integrates with other Amazon Web Services services. Asset types can range from built-in types like Amazon S3 buckets and Amazon Web Services Glue tables to custom types defined for specific organizational needs. Understanding asset types is crucial for properly organizing and managing different kinds of data resources. Prerequisites: The asset type with identifier must exist in the domain. ResourceNotFoundException. You must have the GetAssetType permission. Ensure the domain-identifier value is correct and accessible.

```sql
SELECT
name,
createdAt,
createdBy,
description,
domainId,
formsOutput,
originDomainId,
originProjectId,
owningProjectId,
revision,
updatedAt,
updatedBy
FROM aws.datazone.asset_types
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
AND revision = '{{ revision }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_asset_type"
    values={[
        { label: 'create_asset_type', value: 'create_asset_type' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_asset_type">

Creates a custom asset type. Prerequisites: The formsInput field is required, however, can be passed as empty (e.g. -forms-input &#123;&#125;). You must have CreateAssetType permissions. The domain-identifier and owning-project-identifier must be valid and active. The name of the asset type must be unique within the domain — duplicate names will cause failure. JSON input must be valid — incorrect formatting causes Invalid JSON errors.

```sql
INSERT INTO aws.datazone.asset_types (
name,
description,
formsInput,
owningProjectIdentifier,
domain_identifier,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ formsInput }}' /* required */,
'{{ owningProjectIdentifier }}' /* required */,
'{{ domain_identifier }}',
'{{ region }}'
RETURNING
name,
createdAt,
createdBy,
description,
domainId,
formsOutput,
originDomainId,
originProjectId,
owningProjectId,
revision,
updatedAt,
updatedBy
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: asset_types
  props:
    - name: domain_identifier
      value: "{{ domain_identifier }}"
      description: Required parameter for the asset_types resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the asset_types resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: formsInput
      value: "{{ formsInput }}"
    - name: owningProjectIdentifier
      value: "{{ owningProjectIdentifier }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_asset_type"
    values={[
        { label: 'delete_asset_type', value: 'delete_asset_type' }
    ]}
>
<TabItem value="delete_asset_type">

Deletes an asset type in Amazon DataZone. Prerequisites: The asset type must exist in the domain. You must have DeleteAssetType permission. The asset type must not be in use (e.g., assigned to any asset). If used, deletion will fail. You should retrieve the asset type using get-asset-type to confirm its presence before deletion.

```sql
DELETE FROM aws.datazone.asset_types
WHERE domain_identifier = '{{ domain_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
