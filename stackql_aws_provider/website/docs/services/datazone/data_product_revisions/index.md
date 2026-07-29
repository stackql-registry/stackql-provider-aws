--- 
title: data_product_revisions
hide_title: false
hide_table_of_contents: false
keywords:
  - data_product_revisions
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

Creates, updates, deletes, gets or lists a <code>data_product_revisions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_product_revisions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.data_product_revisions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_data_product_revisions"
    values={[
        { label: 'list_data_product_revisions', value: 'list_data_product_revisions' }
    ]}
>
<TabItem value="list_data_product_revisions">

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
    <td>The ID of the data product revision. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the data product revision was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The user who created the data product revision.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the domain where the data product revision lives. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="revision" /></td>
    <td><code>string</code></td>
    <td>The data product revision.</td>
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
    <td><a href="#list_data_product_revisions"><CopyableCode code="list_data_product_revisions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists data product revisions. Prerequisites: The data product ID must exist within the domain. User must have view permissions on the data product. The domain must be in a valid and accessible state.</td>
</tr>
<tr>
    <td><a href="#create_data_product_revision"><CopyableCode code="create_data_product_revision" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a data product revision. Prerequisites: The original data product must exist in the given domain. User must have permissions on the data product. The domain must be valid and accessible. The new revision name must comply with naming constraints (if required).</td>
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
    <td>The ID of the domain where the data product revision is created.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the data product revision.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of asset filters to return in a single call to ListDataProductRevisions. When the number of data product revisions to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListDataProductRevisions to list the next set of data product revisions.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When the number of data product revisions is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of data product revisions, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListDataProductRevisions to list the next set of data product revisions.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_data_product_revisions"
    values={[
        { label: 'list_data_product_revisions', value: 'list_data_product_revisions' }
    ]}
>
<TabItem value="list_data_product_revisions">

Lists data product revisions. Prerequisites: The data product ID must exist within the domain. User must have view permissions on the data product. The domain must be in a valid and accessible state.

```sql
SELECT
id,
created_at,
created_by,
domain_id,
revision
FROM aws.datazone.data_product_revisions
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_product_revision"
    values={[
        { label: 'create_data_product_revision', value: 'create_data_product_revision' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_product_revision">

Creates a data product revision. Prerequisites: The original data product must exist in the given domain. User must have permissions on the data product. The domain must be valid and accessible. The new revision name must comply with naming constraints (if required).

```sql
INSERT INTO aws.datazone.data_product_revisions (
name,
description,
glossaryTerms,
items,
formsInput,
clientToken,
domain_identifier,
identifier,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ glossaryTerms }}',
'{{ items }}',
'{{ formsInput }}',
'{{ clientToken }}',
'{{ domain_identifier }}',
'{{ identifier }}',
'{{ region }}'
RETURNING
id,
name,
created_at,
created_by,
description,
domain_id,
first_revision_created_at,
first_revision_created_by,
forms_output,
glossary_terms,
items_,
owning_project_id,
revision,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_product_revisions
  props:
    - name: domain_identifier
      value: "{{ domain_identifier }}"
      description: Required parameter for the data_product_revisions resource.
    - name: identifier
      value: "{{ identifier }}"
      description: Required parameter for the data_product_revisions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_product_revisions resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: glossaryTerms
      value:
        - "{{ glossaryTerms }}"
    - name: items
      value:
        - itemType: "{{ itemType }}"
          identifier: "{{ identifier }}"
          revision: "{{ revision }}"
          glossaryTerms: "{{ glossaryTerms }}"
    - name: formsInput
      value:
        - formName: "{{ formName }}"
          typeIdentifier: "{{ typeIdentifier }}"
          typeRevision: "{{ typeRevision }}"
          content: "{{ content }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>
