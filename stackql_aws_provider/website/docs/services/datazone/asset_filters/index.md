--- 
title: asset_filters
hide_title: false
hide_table_of_contents: false
keywords:
  - asset_filters
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

Creates, updates, deletes, gets or lists an <code>asset_filters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="asset_filters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.asset_filters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_asset_filter"
    values={[
        { label: 'get_asset_filter', value: 'get_asset_filter' },
        { label: 'list_asset_filters', value: 'list_asset_filters' }
    ]}
>
<TabItem value="get_asset_filter">

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
    <td>The ID of the asset filter. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the asset filter. (pattern: &lt;code&gt;&#91;\w -&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="asset_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the data asset. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration of the asset filter.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the asset filter was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the asset filter.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the domain where you want to get an asset filter. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="effective_column_names" /></td>
    <td><code>array</code></td>
    <td>The column names of the asset filter.</td>
</tr>
<tr>
    <td><CopyableCode code="effective_row_filter" /></td>
    <td><code>string</code></td>
    <td>The row filter of the asset filter.</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>The error message that is displayed if the action does not complete successfully.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the asset filter. (VALID, INVALID)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_asset_filters">

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
    <td>The ID of the asset filter. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the asset filter. (pattern: &lt;code&gt;&#91;\w -&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="asset_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the data asset. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the asset filter was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the asset filter.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the domain where the asset filter lives. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="effective_column_names" /></td>
    <td><code>array</code></td>
    <td>The effective column names of the asset filter.</td>
</tr>
<tr>
    <td><CopyableCode code="effective_row_filter" /></td>
    <td><code>string</code></td>
    <td>The effective row filter of the asset filter.</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>The error message that is displayed if the action does not succeed.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the asset filter. (VALID, INVALID)</td>
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
    <td><a href="#get_asset_filter"><CopyableCode code="get_asset_filter" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-asset_identifier"><code>asset_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an asset filter. Prerequisites: Domain (--domain-identifier), asset (--asset-identifier), and filter (--identifier) must all exist. The asset filter should not have been deleted. The asset must still exist (since the filter is linked to it).</td>
</tr>
<tr>
    <td><a href="#list_asset_filters"><CopyableCode code="list_asset_filters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-asset_identifier"><code>asset_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-status"><code>status</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists asset filters. Prerequisites: A valid domain and asset must exist. The asset must have at least one filter created to return results.</td>
</tr>
<tr>
    <td><a href="#create_asset_filter"><CopyableCode code="create_asset_filter" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-asset_identifier"><code>asset_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-configuration"><code>configuration</code></a></td>
    <td></td>
    <td>Creates a data asset filter. Asset filters provide a sophisticated way to create controlled views of data assets by selecting specific columns or applying row-level filters. This capability is crucial for organizations that need to share data while maintaining security and privacy controls. For example, your database might be filtered to show only non-PII fields to certain users, or sales data might be filtered by region for different regional teams. Asset filters enable fine-grained access control while maintaining a single source of truth. Prerequisites: A valid domain (--domain-identifier) must exist. A data asset (--asset-identifier) must already be created under that domain. The asset must have the referenced columns available in its schema for column-based filtering. You cannot specify both (columnConfiguration, rowConfiguration)at the same time.</td>
</tr>
<tr>
    <td><a href="#update_asset_filter"><CopyableCode code="update_asset_filter" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-asset_identifier"><code>asset_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an asset filter. Prerequisites: The domain, asset, and asset filter identifier must all exist. The asset must contain the columns being referenced in the update. If applying a row filter, ensure the column referenced in the expression exists in the asset schema.</td>
</tr>
<tr>
    <td><a href="#delete_asset_filter"><CopyableCode code="delete_asset_filter" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-asset_identifier"><code>asset_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an asset filter. Prerequisites: The asset filter must exist. The domain and asset must not have been deleted. Ensure the --identifier refers to a valid filter ID.</td>
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
<tr id="parameter-asset_identifier">
    <td><CopyableCode code="asset_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the data asset.</td>
</tr>
<tr id="parameter-domain_identifier">
    <td><CopyableCode code="domain_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the domain where you want to delete an asset filter.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset filter that you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of asset filters to return in a single call to ListAssetFilters. When the number of asset filters to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListAssetFilters to list the next set of asset filters.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When the number of asset filters is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of asset filters, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListAssetFilters to list the next set of asset filters.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the asset filter.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_asset_filter"
    values={[
        { label: 'get_asset_filter', value: 'get_asset_filter' },
        { label: 'list_asset_filters', value: 'list_asset_filters' }
    ]}
>
<TabItem value="get_asset_filter">

Gets an asset filter. Prerequisites: Domain (--domain-identifier), asset (--asset-identifier), and filter (--identifier) must all exist. The asset filter should not have been deleted. The asset must still exist (since the filter is linked to it).

```sql
SELECT
id,
name,
asset_id,
configuration,
created_at,
description,
domain_id,
effective_column_names,
effective_row_filter,
error_message,
status
FROM aws.datazone.asset_filters
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND asset_identifier = '{{ asset_identifier }}' -- required
AND identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_asset_filters">

Lists asset filters. Prerequisites: A valid domain and asset must exist. The asset must have at least one filter created to return results.

```sql
SELECT
id,
name,
asset_id,
created_at,
description,
domain_id,
effective_column_names,
effective_row_filter,
error_message,
status
FROM aws.datazone.asset_filters
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND asset_identifier = '{{ asset_identifier }}' -- required
AND region = '{{ region }}' -- required
AND status = '{{ status }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_asset_filter"
    values={[
        { label: 'create_asset_filter', value: 'create_asset_filter' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_asset_filter">

Creates a data asset filter. Asset filters provide a sophisticated way to create controlled views of data assets by selecting specific columns or applying row-level filters. This capability is crucial for organizations that need to share data while maintaining security and privacy controls. For example, your database might be filtered to show only non-PII fields to certain users, or sales data might be filtered by region for different regional teams. Asset filters enable fine-grained access control while maintaining a single source of truth. Prerequisites: A valid domain (--domain-identifier) must exist. A data asset (--asset-identifier) must already be created under that domain. The asset must have the referenced columns available in its schema for column-based filtering. You cannot specify both (columnConfiguration, rowConfiguration)at the same time.

```sql
INSERT INTO aws.datazone.asset_filters (
name,
description,
configuration,
clientToken,
domain_identifier,
asset_identifier,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ configuration }}' /* required */,
'{{ clientToken }}',
'{{ domain_identifier }}',
'{{ asset_identifier }}',
'{{ region }}'
RETURNING
id,
name,
asset_id,
configuration,
created_at,
description,
domain_id,
effective_column_names,
effective_row_filter,
error_message,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: asset_filters
  props:
    - name: domain_identifier
      value: "{{ domain_identifier }}"
      description: Required parameter for the asset_filters resource.
    - name: asset_identifier
      value: "{{ asset_identifier }}"
      description: Required parameter for the asset_filters resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the asset_filters resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: configuration
      description: |
        The configuration details of the asset filter.
      value:
        columnConfiguration:
          includedColumnNames:
            - "{{ includedColumnNames }}"
        rowConfiguration:
          rowFilter:
            expression:
              equalTo:
                columnName: "{{ columnName }}"
                value: "{{ value }}"
              notEqualTo:
                columnName: "{{ columnName }}"
                value: "{{ value }}"
              greaterThan:
                columnName: "{{ columnName }}"
                value: "{{ value }}"
              lessThan:
                columnName: "{{ columnName }}"
                value: "{{ value }}"
              greaterThanOrEqualTo:
                columnName: "{{ columnName }}"
                value: "{{ value }}"
              lessThanOrEqualTo:
                columnName: "{{ columnName }}"
                value: "{{ value }}"
              isNull:
                columnName: "{{ columnName }}"
              isNotNull:
                columnName: "{{ columnName }}"
              in:
                columnName: "{{ columnName }}"
                values: "{{ values }}"
              notIn:
                columnName: "{{ columnName }}"
                values: "{{ values }}"
              like:
                columnName: "{{ columnName }}"
                value: "{{ value }}"
              notLike:
                columnName: "{{ columnName }}"
                value: "{{ value }}"
            and:
              - expression:
                  equalTo: "{{ equalTo }}"
                  notEqualTo: "{{ notEqualTo }}"
                  greaterThan: "{{ greaterThan }}"
                  lessThan: "{{ lessThan }}"
                  greaterThanOrEqualTo: "{{ greaterThanOrEqualTo }}"
                  lessThanOrEqualTo: "{{ lessThanOrEqualTo }}"
                  isNull: "{{ isNull }}"
                  isNotNull: "{{ isNotNull }}"
                  in: "{{ in }}"
                  notIn: "{{ notIn }}"
                  like: "{{ like }}"
                  notLike: "{{ notLike }}"
                and: "{{ and }}"
                or: "{{ or }}"
            or:
              - expression:
                  equalTo: "{{ equalTo }}"
                  notEqualTo: "{{ notEqualTo }}"
                  greaterThan: "{{ greaterThan }}"
                  lessThan: "{{ lessThan }}"
                  greaterThanOrEqualTo: "{{ greaterThanOrEqualTo }}"
                  lessThanOrEqualTo: "{{ lessThanOrEqualTo }}"
                  isNull: "{{ isNull }}"
                  isNotNull: "{{ isNotNull }}"
                  in: "{{ in }}"
                  notIn: "{{ notIn }}"
                  like: "{{ like }}"
                  notLike: "{{ notLike }}"
                and: "{{ and }}"
                or: "{{ or }}"
          sensitive: {{ sensitive }}
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_asset_filter"
    values={[
        { label: 'update_asset_filter', value: 'update_asset_filter' }
    ]}
>
<TabItem value="update_asset_filter">

Updates an asset filter. Prerequisites: The domain, asset, and asset filter identifier must all exist. The asset must contain the columns being referenced in the update. If applying a row filter, ensure the column referenced in the expression exists in the asset schema.

```sql
UPDATE aws.datazone.asset_filters
SET 
name = '{{ name }}',
description = '{{ description }}',
configuration = '{{ configuration }}'
WHERE 
domain_identifier = '{{ domain_identifier }}' --required
AND asset_identifier = '{{ asset_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
asset_id,
configuration,
created_at,
description,
domain_id,
effective_column_names,
effective_row_filter,
error_message,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_asset_filter"
    values={[
        { label: 'delete_asset_filter', value: 'delete_asset_filter' }
    ]}
>
<TabItem value="delete_asset_filter">

Deletes an asset filter. Prerequisites: The asset filter must exist. The domain and asset must not have been deleted. Ensure the --identifier refers to a valid filter ID.

```sql
DELETE FROM aws.datazone.asset_filters
WHERE domain_identifier = '{{ domain_identifier }}' --required
AND asset_identifier = '{{ asset_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
