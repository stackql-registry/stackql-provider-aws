--- 
title: recommendation_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - recommendation_templates
  - resiliencehub
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

Creates, updates, deletes, gets or lists a <code>recommendation_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recommendation_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehub.recommendation_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_recommendation_templates"
    values={[
        { label: 'list_recommendation_templates', value: 'list_recommendation_templates' }
    ]}
>
<TabItem value="list_recommendation_templates">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>Token for the next set of results, or null if there are no more results. (pattern: &lt;code&gt;^\S&#123;1,2000&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation_templates" /></td>
    <td><code>array</code></td>
    <td>The recommendation templates for the Resilience Hub applications.</td>
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
    <td><a href="#list_recommendation_templates"><CopyableCode code="list_recommendation_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-assessmentArn"><code>assessmentArn</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-recommendationTemplateArn"><code>recommendationTemplateArn</code></a>, <a href="#parameter-reverseOrder"><code>reverseOrder</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td>Lists the recommendation templates for the Resilience Hub applications.</td>
</tr>
<tr>
    <td><a href="#create_recommendation_template"><CopyableCode code="create_recommendation_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-assessmentArn"><code>assessmentArn</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a new recommendation template for the Resilience Hub application.</td>
</tr>
<tr>
    <td><a href="#delete_recommendation_template"><CopyableCode code="delete_recommendation_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a recommendation template. This is a destructive action that can't be undone.</td>
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
<tr id="parameter-assessmentArn">
    <td><CopyableCode code="assessmentArn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:partition:resiliencehub:region:account:app-assessment/app-id. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name for one of the listed recommendation templates.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Null, or the token from a previous call to get the next set of results.</td>
</tr>
<tr id="parameter-recommendationTemplateArn">
    <td><CopyableCode code="recommendationTemplateArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for a recommendation template.</td>
</tr>
<tr id="parameter-reverseOrder">
    <td><CopyableCode code="reverseOrder" /></td>
    <td><code>boolean</code></td>
    <td>The default is to sort by ascending startTime. To sort by descending startTime, set reverseOrder to true.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>array</code></td>
    <td>Status of the action.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_recommendation_templates"
    values={[
        { label: 'list_recommendation_templates', value: 'list_recommendation_templates' }
    ]}
>
<TabItem value="list_recommendation_templates">

Lists the recommendation templates for the Resilience Hub applications.

```sql
SELECT
next_token,
recommendation_templates
FROM aws.resiliencehub.recommendation_templates
WHERE region = '{{ region }}' -- required
AND assessmentArn = '{{ assessmentArn }}'
AND maxResults = '{{ maxResults }}'
AND name = '{{ name }}'
AND nextToken = '{{ nextToken }}'
AND recommendationTemplateArn = '{{ recommendationTemplateArn }}'
AND reverseOrder = '{{ reverseOrder }}'
AND status = '{{ status }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_recommendation_template"
    values={[
        { label: 'create_recommendation_template', value: 'create_recommendation_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_recommendation_template">

Creates a new recommendation template for the Resilience Hub application.

```sql
INSERT INTO aws.resiliencehub.recommendation_templates (
assessmentArn,
bucketName,
clientToken,
format,
name,
recommendationIds,
recommendationTypes,
tags,
region
)
SELECT 
'{{ assessmentArn }}' /* required */,
'{{ bucketName }}',
'{{ clientToken }}',
'{{ format }}',
'{{ name }}' /* required */,
'{{ recommendationIds }}',
'{{ recommendationTypes }}',
'{{ tags }}',
'{{ region }}'
RETURNING
recommendation_template
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: recommendation_templates
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the recommendation_templates resource.
    - name: assessmentArn
      value: "{{ assessmentArn }}"
    - name: bucketName
      value: "{{ bucketName }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: format
      value: "{{ format }}"
      valid_values: ['CfnYaml', 'CfnJson']
    - name: name
      value: "{{ name }}"
    - name: recommendationIds
      value:
        - "{{ recommendationIds }}"
    - name: recommendationTypes
      value:
        - "{{ recommendationTypes }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_recommendation_template"
    values={[
        { label: 'delete_recommendation_template', value: 'delete_recommendation_template' }
    ]}
>
<TabItem value="delete_recommendation_template">

Deletes a recommendation template. This is a destructive action that can't be undone.

```sql
DELETE FROM aws.resiliencehub.recommendation_templates
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
