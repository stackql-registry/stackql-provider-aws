--- 
title: data_products
hide_title: false
hide_table_of_contents: false
keywords:
  - data_products
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

Creates, updates, deletes, gets or lists a <code>data_products</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_products" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.data_products" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_product"
    values={[
        { label: 'get_data_product', value: 'get_data_product' }
    ]}
>
<TabItem value="get_data_product">

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
    <td>The ID of the data product. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the data product.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the data product is created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The user who created the data product.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the data product.</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The ID of the domain where the data product lives. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="firstRevisionCreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the first revision of the data product is created.</td>
</tr>
<tr>
    <td><CopyableCode code="firstRevisionCreatedBy" /></td>
    <td><code>string</code></td>
    <td>The user who created the first revision of the data product.</td>
</tr>
<tr>
    <td><CopyableCode code="formsOutput" /></td>
    <td><code>array</code></td>
    <td>The metadata forms of the data product.</td>
</tr>
<tr>
    <td><CopyableCode code="glossaryTerms" /></td>
    <td><code>array</code></td>
    <td>The glossary terms of the data product.</td>
</tr>
<tr>
    <td><CopyableCode code="items_" /></td>
    <td><code>array</code></td>
    <td>The data assets of the data product.</td>
</tr>
<tr>
    <td><CopyableCode code="owningProjectId" /></td>
    <td><code>string</code></td>
    <td>The ID of the owning project of the data product. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="revision" /></td>
    <td><code>string</code></td>
    <td>The revision of the data product.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the data product. (CREATED, CREATING, CREATE_FAILED)</td>
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
    <td><a href="#get_data_product"><CopyableCode code="get_data_product" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-revision"><code>revision</code></a></td>
    <td>Gets the data product. Prerequisites: The data product ID must exist. The domain must be valid and accessible. User must have read or discovery permissions for the data product.</td>
</tr>
<tr>
    <td><a href="#create_data_product"><CopyableCode code="create_data_product" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-owningProjectIdentifier"><code>owningProjectIdentifier</code></a></td>
    <td></td>
    <td>Creates a data product. A data product is a comprehensive package that combines data assets with their associated metadata, documentation, and access controls. It's designed to serve specific business needs or use cases, making it easier for users to find and consume data appropriately. Data products include important information about data quality, freshness, and usage guidelines, effectively bridging the gap between data producers and consumers while ensuring proper governance. Prerequisites: The domain must exist and be accessible. The owning project must be valid and active. The name must be unique within the domain (no existing data product with the same name). User must have create permissions for data products in the project.</td>
</tr>
<tr>
    <td><a href="#delete_data_product"><CopyableCode code="delete_data_product" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a data product in Amazon DataZone. Prerequisites: The data product must exist and not be deleted or archived. The user must have delete permissions for the data product. Domain and project must be active.</td>
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
    <td>The ID of the Amazon DataZone domain in which the data product is deleted.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the data product that is deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-revision">
    <td><CopyableCode code="revision" /></td>
    <td><code>string</code></td>
    <td>The revision of the data product.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_data_product"
    values={[
        { label: 'get_data_product', value: 'get_data_product' }
    ]}
>
<TabItem value="get_data_product">

Gets the data product. Prerequisites: The data product ID must exist. The domain must be valid and accessible. User must have read or discovery permissions for the data product.

```sql
SELECT
id,
name,
createdAt,
createdBy,
description,
domainId,
firstRevisionCreatedAt,
firstRevisionCreatedBy,
formsOutput,
glossaryTerms,
items_,
owningProjectId,
revision,
status
FROM aws.datazone.data_products
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
    defaultValue="create_data_product"
    values={[
        { label: 'create_data_product', value: 'create_data_product' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_product">

Creates a data product. A data product is a comprehensive package that combines data assets with their associated metadata, documentation, and access controls. It's designed to serve specific business needs or use cases, making it easier for users to find and consume data appropriately. Data products include important information about data quality, freshness, and usage guidelines, effectively bridging the gap between data producers and consumers while ensuring proper governance. Prerequisites: The domain must exist and be accessible. The owning project must be valid and active. The name must be unique within the domain (no existing data product with the same name). User must have create permissions for data products in the project.

```sql
INSERT INTO aws.datazone.data_products (
name,
owningProjectIdentifier,
description,
glossaryTerms,
formsInput,
items,
clientToken,
domain_identifier,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ owningProjectIdentifier }}' /* required */,
'{{ description }}',
'{{ glossaryTerms }}',
'{{ formsInput }}',
'{{ items }}',
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
firstRevisionCreatedAt,
firstRevisionCreatedBy,
formsOutput,
glossaryTerms,
items_,
owningProjectId,
revision,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_products
  props:
    - name: domain_identifier
      value: "{{ domain_identifier }}"
      description: Required parameter for the data_products resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_products resource.
    - name: name
      value: "{{ name }}"
    - name: owningProjectIdentifier
      value: "{{ owningProjectIdentifier }}"
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
    - name: items
      value:
        - itemType: "{{ itemType }}"
          identifier: "{{ identifier }}"
          revision: "{{ revision }}"
          glossaryTerms: "{{ glossaryTerms }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_data_product"
    values={[
        { label: 'delete_data_product', value: 'delete_data_product' }
    ]}
>
<TabItem value="delete_data_product">

Deletes a data product in Amazon DataZone. Prerequisites: The data product must exist and not be deleted or archived. The user must have delete permissions for the data product. Domain and project must be active.

```sql
DELETE FROM aws.datazone.data_products
WHERE domain_identifier = '{{ domain_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
