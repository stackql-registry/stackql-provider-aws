--- 
title: reference_stores
hide_title: false
hide_table_of_contents: false
keywords:
  - reference_stores
  - omics
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

Creates, updates, deletes, gets or lists a <code>reference_stores</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reference_stores" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.omics.reference_stores" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_reference_store"
    values={[
        { label: 'get_reference_store', value: 'get_reference_store' },
        { label: 'list_reference_stores', value: 'list_reference_stores' }
    ]}
>
<TabItem value="get_reference_store">

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
    <td>The store's ID. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The store's name. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The store's ARN. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the store was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The store's description. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sseConfig" /></td>
    <td><code>object</code></td>
    <td>Server-side encryption (SSE) settings for a store.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_reference_stores">

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
    <td>The store's ID. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The store's name. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The store's ARN. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the store was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The store's description. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sseConfig" /></td>
    <td><code>object</code></td>
    <td>Server-side encryption (SSE) settings for a store.</td>
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
    <td><a href="#get_reference_store"><CopyableCode code="get_reference_store" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a reference store.</td>
</tr>
<tr>
    <td><a href="#list_reference_stores"><CopyableCode code="list_reference_stores" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves a list of reference stores linked to your account and returns their metadata in JSON format. For more information, see Creating a reference store in the Amazon Web Services HealthOmics User Guide.</td>
</tr>
<tr>
    <td><a href="#create_reference_store"><CopyableCode code="create_reference_store" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a reference store and returns metadata in JSON format. Reference stores are used to store reference genomes in FASTA format. A reference store is created when the first reference genome is imported. To import additional reference genomes from an Amazon S3 bucket, use the StartReferenceImportJob API operation. For more information, see Creating a HealthOmics reference store in the Amazon Web Services HealthOmics User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_reference_store"><CopyableCode code="delete_reference_store" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a reference store and returns a response with no body if the operation is successful. You can only delete a reference store when it does not contain any reference genomes. To empty a reference store, use DeleteReference. For more information about your workflow status, see Deleting HealthOmics reference and sequence stores in the Amazon Web Services HealthOmics User Guide.</td>
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
    <td>The store's ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of stores to return in one page of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Specify the pagination token from a previous request to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_reference_store"
    values={[
        { label: 'get_reference_store', value: 'get_reference_store' },
        { label: 'list_reference_stores', value: 'list_reference_stores' }
    ]}
>
<TabItem value="get_reference_store">

Gets information about a reference store.

```sql
SELECT
id,
name,
arn,
creationTime,
description,
sseConfig
FROM aws.omics.reference_stores
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_reference_stores">

Retrieves a list of reference stores linked to your account and returns their metadata in JSON format. For more information, see Creating a reference store in the Amazon Web Services HealthOmics User Guide.

```sql
SELECT
id,
name,
arn,
creationTime,
description,
sseConfig
FROM aws.omics.reference_stores
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_reference_store"
    values={[
        { label: 'create_reference_store', value: 'create_reference_store' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_reference_store">

Creates a reference store and returns metadata in JSON format. Reference stores are used to store reference genomes in FASTA format. A reference store is created when the first reference genome is imported. To import additional reference genomes from an Amazon S3 bucket, use the StartReferenceImportJob API operation. For more information, see Creating a HealthOmics reference store in the Amazon Web Services HealthOmics User Guide.

```sql
INSERT INTO aws.omics.reference_stores (
name,
description,
sseConfig,
tags,
clientToken,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ sseConfig }}',
'{{ tags }}',
'{{ clientToken }}',
'{{ region }}'
RETURNING
id,
name,
arn,
creationTime,
description,
sseConfig
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: reference_stores
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the reference_stores resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: sseConfig
      description: |
        Server-side encryption (SSE) settings for a store.
      value:
        type_: "{{ type_ }}"
        keyArn: "{{ keyArn }}"
    - name: tags
      value: "{{ tags }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_reference_store"
    values={[
        { label: 'delete_reference_store', value: 'delete_reference_store' }
    ]}
>
<TabItem value="delete_reference_store">

Deletes a reference store and returns a response with no body if the operation is successful. You can only delete a reference store when it does not contain any reference genomes. To empty a reference store, use DeleteReference. For more information about your workflow status, see Deleting HealthOmics reference and sequence stores in the Amazon Web Services HealthOmics User Guide.

```sql
DELETE FROM aws.omics.reference_stores
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
