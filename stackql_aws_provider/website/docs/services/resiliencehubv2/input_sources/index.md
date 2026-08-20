--- 
title: input_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - input_sources
  - resiliencehubv2
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

Creates, updates, deletes, gets or lists an <code>input_sources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="input_sources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehubv2.input_sources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_input_sources"
    values={[
        { label: 'list_input_sources', value: 'list_input_sources' }
    ]}
>
<TabItem value="list_input_sources">

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
    <td><CopyableCode code="cfn_stack_arn" /></td>
    <td><code>string</code></td>
    <td>ARN identifier. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the input source was created.</td>
</tr>
<tr>
    <td><CopyableCode code="design_file_s3_url" /></td>
    <td><code>string</code></td>
    <td>S3 URL — virtual hosted-style or s3:​// URI. (pattern: &lt;code&gt;((https:​//(&#91;^/&#93;+)\.s3&#91;^/&#93;*\.&#91;^/&#93;+)|(s3:​//(&#91;^/&#93;+)))/\S&#123;1,2000&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="eks" /></td>
    <td><code>object</code></td>
    <td>The Amazon EKS configuration, if this input source uses EKS.</td>
</tr>
<tr>
    <td><CopyableCode code="input_source_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the input source. (pattern: &lt;code&gt;\S&#123;1,255&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_tags" /></td>
    <td><code>array</code></td>
    <td>The resource tags used for discovery, if this input source uses tags.</td>
</tr>
<tr>
    <td><CopyableCode code="tf_state_file_url" /></td>
    <td><code>string</code></td>
    <td>S3 URL — virtual hosted-style or s3:​// URI. (pattern: &lt;code&gt;((https:​//(&#91;^/&#93;+)\.s3&#91;^/&#93;*\.&#91;^/&#93;+)|(s3:​//(&#91;^/&#93;+)))/\S&#123;1,2000&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the input source. (CFN_STACK, TAGS, EKS, TERRAFORM, DESIGN_FILE, MONITORING)</td>
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
    <td><a href="#list_input_sources"><CopyableCode code="list_input_sources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-serviceArn"><code>serviceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-type"><code>type</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists input sources for a service.</td>
</tr>
<tr>
    <td><a href="#create_input_source"><CopyableCode code="create_input_source" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-serviceArn"><code>serviceArn</code></a>, <a href="#parameter-resourceConfiguration"><code>resourceConfiguration</code></a></td>
    <td></td>
    <td>Creates an input source for a service.</td>
</tr>
<tr>
    <td><a href="#delete_input_source"><CopyableCode code="delete_input_source" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an input source.</td>
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
<tr id="parameter-serviceArn">
    <td><CopyableCode code="serviceArn" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Filter input sources by type.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_input_sources"
    values={[
        { label: 'list_input_sources', value: 'list_input_sources' }
    ]}
>
<TabItem value="list_input_sources">

Lists input sources for a service.

```sql
SELECT
cfn_stack_arn,
created_at,
design_file_s3_url,
eks,
input_source_id,
resource_tags,
tf_state_file_url,
type_
FROM aws.resiliencehubv2.input_sources
WHERE serviceArn = '{{ serviceArn }}' -- required
AND region = '{{ region }}' -- required
AND type = '{{ type }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_input_source"
    values={[
        { label: 'create_input_source', value: 'create_input_source' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_input_source">

Creates an input source for a service.

```sql
INSERT INTO aws.resiliencehubv2.input_sources (
serviceArn,
resourceConfiguration,
clientToken,
region
)
SELECT 
'{{ serviceArn }}' /* required */,
'{{ resourceConfiguration }}' /* required */,
'{{ clientToken }}',
'{{ region }}'
RETURNING
input_source_id,
service_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: input_sources
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the input_sources resource.
    - name: serviceArn
      value: "{{ serviceArn }}"
      description: |
        ARN identifier.
    - name: resourceConfiguration
      description: |
        Resource configuration for an input source. Provide exactly one field.
      value:
        resourceTags:
          - key: "{{ key }}"
            values: "{{ values }}"
        cfnStackArn: "{{ cfnStackArn }}"
        tfStateFileUrl: "{{ tfStateFileUrl }}"
        eks:
          clusterArn: "{{ clusterArn }}"
          namespaces:
            - "{{ namespaces }}"
        designFileS3Url: "{{ designFileS3Url }}"
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        Idempotency token.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_input_source"
    values={[
        { label: 'delete_input_source', value: 'delete_input_source' }
    ]}
>
<TabItem value="delete_input_source">

Deletes an input source.

```sql
DELETE FROM aws.resiliencehubv2.input_sources
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
