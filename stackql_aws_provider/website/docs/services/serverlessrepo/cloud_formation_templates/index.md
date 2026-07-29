--- 
title: cloud_formation_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - cloud_formation_templates
  - serverlessrepo
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

Creates, updates, deletes, gets or lists a <code>cloud_formation_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cloud_formation_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.serverlessrepo.cloud_formation_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cloud_formation_template"
    values={[
        { label: 'get_cloud_formation_template', value: 'get_cloud_formation_template' }
    ]}
>
<TabItem value="get_cloud_formation_template">

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
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The application Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string</code></td>
    <td>The date and time this resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_time" /></td>
    <td><code>string</code></td>
    <td>The date and time this template expires. Templates expire 1 hour after creation.</td>
</tr>
<tr>
    <td><CopyableCode code="semantic_version" /></td>
    <td><code>string</code></td>
    <td>The semantic version of the application: https:​//semver.org/</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the template creation workflow. Possible values: PREPARING | ACTIVE | EXPIRED (PREPARING, ACTIVE, EXPIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="template_id" /></td>
    <td><code>string</code></td>
    <td>The UUID returned by CreateCloudFormationTemplate. Pattern: &#91;0-9a-fA-F&#93;&#123;8&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;12&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="template_url" /></td>
    <td><code>string</code></td>
    <td>A link to the template that can be used to deploy the application using AWS CloudFormation.</td>
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
    <td><a href="#get_cloud_formation_template"><CopyableCode code="get_cloud_formation_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-template_id"><code>template_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified AWS CloudFormation template.</td>
</tr>
<tr>
    <td><a href="#create_cloud_formation_template"><CopyableCode code="create_cloud_formation_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates an AWS CloudFormation template.</td>
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
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the application.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-template_id">
    <td><CopyableCode code="template_id" /></td>
    <td><code>string</code></td>
    <td>The UUID returned by CreateCloudFormationTemplate. Pattern: &#91;0-9a-fA-F&#93;&#123;8&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;12&#125;</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_cloud_formation_template"
    values={[
        { label: 'get_cloud_formation_template', value: 'get_cloud_formation_template' }
    ]}
>
<TabItem value="get_cloud_formation_template">

Gets the specified AWS CloudFormation template.

```sql
SELECT
application_id,
creation_time,
expiration_time,
semantic_version,
status,
template_id,
template_url
FROM aws.serverlessrepo.cloud_formation_templates
WHERE application_id = '{{ application_id }}' -- required
AND template_id = '{{ template_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cloud_formation_template"
    values={[
        { label: 'create_cloud_formation_template', value: 'create_cloud_formation_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cloud_formation_template">

Creates an AWS CloudFormation template.

```sql
INSERT INTO aws.serverlessrepo.cloud_formation_templates (
SemanticVersion,
application_id,
region
)
SELECT 
'{{ SemanticVersion }}',
'{{ application_id }}',
'{{ region }}'
RETURNING
application_id,
creation_time,
expiration_time,
semantic_version,
status,
template_id,
template_url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cloud_formation_templates
  props:
    - name: application_id
      value: "{{ application_id }}"
      description: Required parameter for the cloud_formation_templates resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cloud_formation_templates resource.
    - name: SemanticVersion
      value: "{{ SemanticVersion }}"
`}</CodeBlock>

</TabItem>
</Tabs>
