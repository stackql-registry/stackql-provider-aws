--- 
title: exclusions_previews
hide_title: false
hide_table_of_contents: false
keywords:
  - exclusions_previews
  - inspector
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

Creates, updates, deletes, gets or lists an <code>exclusions_previews</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="exclusions_previews" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector.exclusions_previews" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_exclusions_preview"
    values={[
        { label: 'get_exclusions_preview', value: 'get_exclusions_preview' }
    ]}
>
<TabItem value="get_exclusions_preview">

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
    <td><CopyableCode code="exclusion_previews" /></td>
    <td><code>array</code></td>
    <td>Information about the exclusions included in the preview.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>When a response is generated, if there is more data to be listed, this parameters is present in the response and contains the value to use for the nextToken parameter in a subsequent pagination request. If there is no more data to be listed, this parameter is set to null.</td>
</tr>
<tr>
    <td><CopyableCode code="preview_status" /></td>
    <td><code>string</code></td>
    <td>Specifies the status of the request to generate an exclusions preview. (WORK_IN_PROGRESS, COMPLETED)</td>
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
    <td><a href="#get_exclusions_preview"><CopyableCode code="get_exclusions_preview" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the exclusions preview (a list of ExclusionPreview objects) specified by the preview token. You can obtain the preview token by running the CreateExclusionsPreview API.</td>
</tr>
<tr>
    <td><a href="#create_exclusions_preview"><CopyableCode code="create_exclusions_preview" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-assessmentTemplateArn"><code>assessmentTemplateArn</code></a></td>
    <td></td>
    <td>Starts the generation of an exclusions preview for the specified assessment template. The exclusions preview lists the potential exclusions (ExclusionPreview) that Inspector can detect before it runs the assessment.</td>
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
    defaultValue="get_exclusions_preview"
    values={[
        { label: 'get_exclusions_preview', value: 'get_exclusions_preview' }
    ]}
>
<TabItem value="get_exclusions_preview">

Retrieves the exclusions preview (a list of ExclusionPreview objects) specified by the preview token. You can obtain the preview token by running the CreateExclusionsPreview API.

```sql
SELECT
exclusion_previews,
next_token,
preview_status
FROM aws.inspector.exclusions_previews
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_exclusions_preview"
    values={[
        { label: 'create_exclusions_preview', value: 'create_exclusions_preview' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_exclusions_preview">

Starts the generation of an exclusions preview for the specified assessment template. The exclusions preview lists the potential exclusions (ExclusionPreview) that Inspector can detect before it runs the assessment.

```sql
INSERT INTO aws.inspector.exclusions_previews (
assessmentTemplateArn,
region
)
SELECT 
'{{ assessmentTemplateArn }}' /* required */,
'{{ region }}'
RETURNING
preview_token
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: exclusions_previews
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the exclusions_previews resource.
    - name: assessmentTemplateArn
      value: "{{ assessmentTemplateArn }}"
      description: |
        The ARN that specifies the assessment template for which you want to create an exclusions preview.
`}</CodeBlock>

</TabItem>
</Tabs>
