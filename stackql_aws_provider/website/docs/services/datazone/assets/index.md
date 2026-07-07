--- 
title: assets
hide_title: false
hide_table_of_contents: false
keywords:
  - assets
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

Creates, updates, deletes, gets or lists an <code>assets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="assets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.assets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_asset"
    values={[
        { label: 'get_asset', value: 'get_asset' }
    ]}
>
<TabItem value="get_asset">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the asset.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the asset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone user who created the asset.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the Amazon DataZone asset.</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone domain to which the asset belongs. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="externalIdentifier" /></td>
    <td><code>string</code></td>
    <td>The external ID of the asset.</td>
</tr>
<tr>
    <td><CopyableCode code="firstRevisionCreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the first revision of the asset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="firstRevisionCreatedBy" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone user who created the first revision of the asset.</td>
</tr>
<tr>
    <td><CopyableCode code="formsOutput" /></td>
    <td><code>array</code></td>
    <td>The metadata forms attached to the asset.</td>
</tr>
<tr>
    <td><CopyableCode code="glossaryTerms" /></td>
    <td><code>array</code></td>
    <td>The business glossary terms attached to the asset.</td>
</tr>
<tr>
    <td><CopyableCode code="governedGlossaryTerms" /></td>
    <td><code>array</code></td>
    <td>The restricted glossary terms attached to an asset.</td>
</tr>
<tr>
    <td><CopyableCode code="latestTimeSeriesDataPointFormsOutput" /></td>
    <td><code>array</code></td>
    <td>The latest data point that was imported into the time series form for the asset.</td>
</tr>
<tr>
    <td><CopyableCode code="listing" /></td>
    <td><code>object</code></td>
    <td>The listing of the asset.</td>
</tr>
<tr>
    <td><CopyableCode code="owningProjectId" /></td>
    <td><code>string</code></td>
    <td>The ID of the project that owns the asset. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="readOnlyFormsOutput" /></td>
    <td><code>array</code></td>
    <td>The read-only metadata forms attached to the asset.</td>
</tr>
<tr>
    <td><CopyableCode code="revision" /></td>
    <td><code>string</code></td>
    <td>The revision of the asset.</td>
</tr>
<tr>
    <td><CopyableCode code="typeIdentifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset type. (pattern: &lt;code&gt;(?!\.)&#91;\w\.&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="typeRevision" /></td>
    <td><code>string</code></td>
    <td>The revision of the asset type.</td>
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
    <td><a href="#get_asset"><CopyableCode code="get_asset" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-revision"><code>revision</code></a></td>
    <td>Gets an Amazon DataZone asset. An asset is the fundamental building block in Amazon DataZone, representing any data resource that needs to be cataloged and managed. It can take many forms, from Amazon S3 buckets and database tables to dashboards and machine learning models. Each asset contains comprehensive metadata about the resource, including its location, schema, ownership, and lineage information. Assets are essential for organizing and managing data resources across an organization, making them discoverable and usable while maintaining proper governance. Before using the Amazon DataZone GetAsset command, ensure the following prerequisites are met: Domain identifier must exist and be valid Asset identifier must exist User must have the required permissions to perform the action</td>
</tr>
<tr>
    <td><a href="#create_asset"><CopyableCode code="create_asset" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-typeIdentifier"><code>typeIdentifier</code></a>, <a href="#parameter-owningProjectIdentifier"><code>owningProjectIdentifier</code></a></td>
    <td></td>
    <td>Creates an asset in Amazon DataZone catalog. Before creating assets, make sure that the following requirements are met: --domain-identifier must refer to an existing domain. --owning-project-identifier must be a valid project within the domain. Asset type must be created beforehand using create-asset-type, or be a supported system-defined type. For more information, see create-asset-type. --type-revision (if used) must match a valid revision of the asset type. formsInput is required when it is associated as required in the asset-type. For more information, see create-form-type. Form content must include all required fields as per the form schema (e.g., bucketArn). You must invoke the following pre-requisite commands before invoking this API: CreateFormType CreateAssetType</td>
</tr>
<tr>
    <td><a href="#delete_asset"><CopyableCode code="delete_asset" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an asset in Amazon DataZone. --domain-identifier must refer to a valid and existing domain. --identifier must refer to an existing asset in the specified domain. Asset must not be referenced in any existing asset filters. Asset must not be linked to any draft or published data product. User must have delete permissions for the domain and project.</td>
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
    <td>The ID of the Amazon DataZone domain in which the asset is deleted.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the asset that is deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-revision">
    <td><CopyableCode code="revision" /></td>
    <td><code>string</code></td>
    <td>The revision of the Amazon DataZone asset.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_asset"
    values={[
        { label: 'get_asset', value: 'get_asset' }
    ]}
>
<TabItem value="get_asset">

Gets an Amazon DataZone asset. An asset is the fundamental building block in Amazon DataZone, representing any data resource that needs to be cataloged and managed. It can take many forms, from Amazon S3 buckets and database tables to dashboards and machine learning models. Each asset contains comprehensive metadata about the resource, including its location, schema, ownership, and lineage information. Assets are essential for organizing and managing data resources across an organization, making them discoverable and usable while maintaining proper governance. Before using the Amazon DataZone GetAsset command, ensure the following prerequisites are met: Domain identifier must exist and be valid Asset identifier must exist User must have the required permissions to perform the action

```sql
SELECT
id,
name,
createdAt,
createdBy,
description,
domainId,
externalIdentifier,
firstRevisionCreatedAt,
firstRevisionCreatedBy,
formsOutput,
glossaryTerms,
governedGlossaryTerms,
latestTimeSeriesDataPointFormsOutput,
listing,
owningProjectId,
readOnlyFormsOutput,
revision,
typeIdentifier,
typeRevision
FROM aws.datazone.assets
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
    defaultValue="create_asset"
    values={[
        { label: 'create_asset', value: 'create_asset' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_asset">

Creates an asset in Amazon DataZone catalog. Before creating assets, make sure that the following requirements are met: --domain-identifier must refer to an existing domain. --owning-project-identifier must be a valid project within the domain. Asset type must be created beforehand using create-asset-type, or be a supported system-defined type. For more information, see create-asset-type. --type-revision (if used) must match a valid revision of the asset type. formsInput is required when it is associated as required in the asset-type. For more information, see create-form-type. Form content must include all required fields as per the form schema (e.g., bucketArn). You must invoke the following pre-requisite commands before invoking this API: CreateFormType CreateAssetType

```sql
INSERT INTO aws.datazone.assets (
name,
externalIdentifier,
typeIdentifier,
typeRevision,
description,
glossaryTerms,
formsInput,
owningProjectIdentifier,
predictionConfiguration,
clientToken,
domain_identifier,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ externalIdentifier }}',
'{{ typeIdentifier }}' /* required */,
'{{ typeRevision }}',
'{{ description }}',
'{{ glossaryTerms }}',
'{{ formsInput }}',
'{{ owningProjectIdentifier }}' /* required */,
'{{ predictionConfiguration }}',
'{{ clientToken }}',
'{{ domain_identifier }}',
'{{ region }}'
RETURNING
id,
name,
createdAt,
createdBy,
description,
domainId,
externalIdentifier,
firstRevisionCreatedAt,
firstRevisionCreatedBy,
formsOutput,
glossaryTerms,
governedGlossaryTerms,
latestTimeSeriesDataPointFormsOutput,
listing,
owningProjectId,
predictionConfiguration,
readOnlyFormsOutput,
revision,
typeIdentifier,
typeRevision
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: assets
  props:
    - name: domain_identifier
      value: "{{ domain_identifier }}"
      description: Required parameter for the assets resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the assets resource.
    - name: name
      value: "{{ name }}"
    - name: externalIdentifier
      value: "{{ externalIdentifier }}"
    - name: typeIdentifier
      value: "{{ typeIdentifier }}"
    - name: typeRevision
      value: "{{ typeRevision }}"
    - name: description
      value: "{{ description }}"
    - name: glossaryTerms
      value:
        - "{{ glossaryTerms }}"
    - name: formsInput
      value:
        - formName: "{{ formName }}"
          typeIdentifier: "{{ typeIdentifier }}"
          typeRevision: "{{ typeRevision }}"
          content: "{{ content }}"
    - name: owningProjectIdentifier
      value: "{{ owningProjectIdentifier }}"
    - name: predictionConfiguration
      description: |
        The configuration of the prediction.
      value:
        businessNameGeneration:
          enabled: {{ enabled }}
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_asset"
    values={[
        { label: 'delete_asset', value: 'delete_asset' }
    ]}
>
<TabItem value="delete_asset">

Deletes an asset in Amazon DataZone. --domain-identifier must refer to a valid and existing domain. --identifier must refer to an existing asset in the specified domain. Asset must not be referenced in any existing asset filters. Asset must not be linked to any draft or published data product. User must have delete permissions for the domain and project.

```sql
DELETE FROM aws.datazone.assets
WHERE domain_identifier = '{{ domain_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
