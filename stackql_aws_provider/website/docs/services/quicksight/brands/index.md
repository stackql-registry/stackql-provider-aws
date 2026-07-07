--- 
title: brands
hide_title: false
hide_table_of_contents: false
keywords:
  - brands
  - quicksight
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

Creates, updates, deletes, gets or lists a <code>brands</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="brands" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.brands" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_brand"
    values={[
        { label: 'describe_brand', value: 'describe_brand' },
        { label: 'list_brands', value: 'list_brands' }
    ]}
>
<TabItem value="describe_brand">

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
    <td><CopyableCode code="BrandDefinition" /></td>
    <td><code>object</code></td>
    <td>The definition of the brand.</td>
</tr>
<tr>
    <td><CopyableCode code="BrandDetail" /></td>
    <td><code>object</code></td>
    <td>The details of the brand.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_brands">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the brand.</td>
</tr>
<tr>
    <td><CopyableCode code="BrandId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Quick brand. (pattern: &lt;code&gt;&#91;\w\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="BrandName" /></td>
    <td><code>string</code></td>
    <td>The name of the brand. (pattern: &lt;code&gt;&#91; -ÿ&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="BrandStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the brand. (CREATE_IN_PROGRESS, CREATE_SUCCEEDED, CREATE_FAILED, DELETE_IN_PROGRESS, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the brand was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the brand. (pattern: &lt;code&gt;&#91; -ÿ&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the brand was last updated.</td>
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
    <td><a href="#describe_brand"><CopyableCode code="describe_brand" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-brand_id"><code>brand_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-versionId"><code>versionId</code></a></td>
    <td>Describes a brand.</td>
</tr>
<tr>
    <td><a href="#list_brands"><CopyableCode code="list_brands" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Lists all brands in an Quick Sight account.</td>
</tr>
<tr>
    <td><a href="#create_brand"><CopyableCode code="create_brand" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-brand_id"><code>brand_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates an Quick Sight brand.</td>
</tr>
<tr>
    <td><a href="#update_brand"><CopyableCode code="update_brand" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-brand_id"><code>brand_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a brand.</td>
</tr>
<tr>
    <td><a href="#delete_brand"><CopyableCode code="delete_brand" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-brand_id"><code>brand_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API permanently deletes the specified Quick Sight brand. When you delete a brand: The brand and all its associated branding elements are permanently removed Any applications or dashboards using this brand will revert to default styling This action cannot be undone through the API Before proceeding: Verify that the brand is no longer needed and consider the impact on any applications currently using this brand. Deletes an Quick Sight brand.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the brand.</td>
</tr>
<tr id="parameter-brand_id">
    <td><CopyableCode code="brand_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Quick brand.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned in a single request.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null if there are no more results.</td>
</tr>
<tr id="parameter-versionId">
    <td><CopyableCode code="versionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the specific version. The default value is the latest version.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_brand"
    values={[
        { label: 'describe_brand', value: 'describe_brand' },
        { label: 'list_brands', value: 'list_brands' }
    ]}
>
<TabItem value="describe_brand">

Describes a brand.

```sql
SELECT
BrandDefinition,
BrandDetail,
RequestId
FROM aws.quicksight.brands
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND brand_id = '{{ brand_id }}' -- required
AND region = '{{ region }}' -- required
AND versionId = '{{ versionId }}'
;
```
</TabItem>
<TabItem value="list_brands">

Lists all brands in an Quick Sight account.

```sql
SELECT
Arn,
BrandId,
BrandName,
BrandStatus,
CreatedTime,
Description,
LastUpdatedTime
FROM aws.quicksight.brands
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_brand"
    values={[
        { label: 'create_brand', value: 'create_brand' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_brand">

Creates an Quick Sight brand.

```sql
INSERT INTO aws.quicksight.brands (
BrandDefinition,
Tags,
aws_account_id,
brand_id,
region
)
SELECT 
'{{ BrandDefinition }}',
'{{ Tags }}',
'{{ aws_account_id }}',
'{{ brand_id }}',
'{{ region }}'
RETURNING
BrandDefinition,
BrandDetail,
RequestId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: brands
  props:
    - name: aws_account_id
      value: "{{ aws_account_id }}"
      description: Required parameter for the brands resource.
    - name: brand_id
      value: "{{ brand_id }}"
      description: Required parameter for the brands resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the brands resource.
    - name: BrandDefinition
      description: |
        The definition of the brand.
      value:
        BrandName: "{{ BrandName }}"
        Description: "{{ Description }}"
        ApplicationTheme:
          BrandColorPalette:
            Primary:
              Foreground: "{{ Foreground }}"
              Background: "{{ Background }}"
            Secondary:
              Foreground: "{{ Foreground }}"
              Background: "{{ Background }}"
            Accent:
              Foreground: "{{ Foreground }}"
              Background: "{{ Background }}"
            Measure:
              Foreground: "{{ Foreground }}"
              Background: "{{ Background }}"
            Dimension:
              Foreground: "{{ Foreground }}"
              Background: "{{ Background }}"
            Success:
              Foreground: "{{ Foreground }}"
              Background: "{{ Background }}"
            Info:
              Foreground: "{{ Foreground }}"
              Background: "{{ Background }}"
            Warning:
              Foreground: "{{ Foreground }}"
              Background: "{{ Background }}"
            Danger:
              Foreground: "{{ Foreground }}"
              Background: "{{ Background }}"
          ContextualAccentPalette:
            Connection:
              Foreground: "{{ Foreground }}"
              Background: "{{ Background }}"
            Visualization:
              Foreground: "{{ Foreground }}"
              Background: "{{ Background }}"
            Insight:
              Foreground: "{{ Foreground }}"
              Background: "{{ Background }}"
            Automation:
              Foreground: "{{ Foreground }}"
              Background: "{{ Background }}"
          BrandElementStyle:
            NavbarStyle:
              GlobalNavbar:
                Foreground: "{{ Foreground }}"
                Background: "{{ Background }}"
              ContextualNavbar:
                Foreground: "{{ Foreground }}"
                Background: "{{ Background }}"
        LogoConfiguration:
          AltText: "{{ AltText }}"
          LogoSet:
            Primary:
              Original:
                Source: "{{ Source }}"
            Favicon:
              Original:
                Source: "{{ Source }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_brand"
    values={[
        { label: 'update_brand', value: 'update_brand' }
    ]}
>
<TabItem value="update_brand">

Updates a brand.

```sql
UPDATE aws.quicksight.brands
SET 
BrandDefinition = '{{ BrandDefinition }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND brand_id = '{{ brand_id }}' --required
AND region = '{{ region }}' --required
RETURNING
BrandDefinition,
BrandDetail,
RequestId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_brand"
    values={[
        { label: 'delete_brand', value: 'delete_brand' }
    ]}
>
<TabItem value="delete_brand">

This API permanently deletes the specified Quick Sight brand. When you delete a brand: The brand and all its associated branding elements are permanently removed Any applications or dashboards using this brand will revert to default styling This action cannot be undone through the API Before proceeding: Verify that the brand is no longer needed and consider the impact on any applications currently using this brand. Deletes an Quick Sight brand.

```sql
DELETE FROM aws.quicksight.brands
WHERE aws_account_id = '{{ aws_account_id }}' --required
AND brand_id = '{{ brand_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
