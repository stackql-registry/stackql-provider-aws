--- 
title: service_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - service_templates
  - proton
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

Creates, updates, deletes, gets or lists a <code>service_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.proton.service_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_service_template"
    values={[
        { label: 'get_service_template', value: 'get_service_template' },
        { label: 'list_service_templates', value: 'list_service_templates' }
    ]}
>
<TabItem value="get_service_template">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the service template. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service template.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the service template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the service template.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The service template name as displayed in the developer interface.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionKey" /></td>
    <td><code>string</code></td>
    <td>The customer provided service template encryption key that's used to encrypt data. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov):&#91;a-zA-Z0-9-&#93;+:&#91;a-zA-Z0-9-&#93;*:\d&#123;12&#125;:(&#91;\w+=,.@-&#93;+&#91;/:&#93;)*&#91;\w+=,.@-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the service template was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="pipelineProvisioning" /></td>
    <td><code>string</code></td>
    <td>If pipelineProvisioning is true, a service pipeline is included in the service template. Otherwise, a service pipeline isn't included in the service template. (CUSTOMER_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="recommendedVersion" /></td>
    <td><code>string</code></td>
    <td>The recommended version of the service template. (pattern: &lt;code&gt;^(0|(&#91;1-9&#93;&#123;1&#125;\d*)).(0|(&#91;1-9&#93;&#123;1&#125;\d*))$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_service_templates">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the service template. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service template.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the service template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the service template.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The service template name as displayed in the developer interface.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the service template was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="pipelineProvisioning" /></td>
    <td><code>string</code></td>
    <td>If pipelineProvisioning is true, a service pipeline is included in the service template, otherwise a service pipeline isn't included in the service template. (CUSTOMER_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="recommendedVersion" /></td>
    <td><code>string</code></td>
    <td>The recommended version of the service template. (pattern: &lt;code&gt;^(0|(&#91;1-9&#93;&#123;1&#125;\d*)).(0|(&#91;1-9&#93;&#123;1&#125;\d*))$&lt;/code&gt;)</td>
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
    <td><a href="#get_service_template"><CopyableCode code="get_service_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get detailed data for a service template.</td>
</tr>
<tr>
    <td><a href="#list_service_templates"><CopyableCode code="list_service_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List service templates with detail data.</td>
</tr>
<tr>
    <td><a href="#create_service_template"><CopyableCode code="create_service_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Create a service template. The administrator creates a service template to define standardized infrastructure and an optional CI/CD service pipeline. Developers, in turn, select the service template from Proton. If the selected service template includes a service pipeline definition, they provide a link to their source code repository. Proton then deploys and manages the infrastructure defined by the selected service template. For more information, see Proton templates in the Proton User Guide.</td>
</tr>
<tr>
    <td><a href="#update_service_template"><CopyableCode code="update_service_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Update a service template.</td>
</tr>
<tr>
    <td><a href="#delete_service_template"><CopyableCode code="delete_service_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>If no other major or minor versions of the service template exist, delete the service template.</td>
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
    defaultValue="get_service_template"
    values={[
        { label: 'get_service_template', value: 'get_service_template' },
        { label: 'list_service_templates', value: 'list_service_templates' }
    ]}
>
<TabItem value="get_service_template">

Get detailed data for a service template.

```sql
SELECT
name,
arn,
createdAt,
description,
displayName,
encryptionKey,
lastModifiedAt,
pipelineProvisioning,
recommendedVersion
FROM aws.proton.service_templates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_service_templates">

List service templates with detail data.

```sql
SELECT
name,
arn,
createdAt,
description,
displayName,
lastModifiedAt,
pipelineProvisioning,
recommendedVersion
FROM aws.proton.service_templates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_service_template"
    values={[
        { label: 'create_service_template', value: 'create_service_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_service_template">

Create a service template. The administrator creates a service template to define standardized infrastructure and an optional CI/CD service pipeline. Developers, in turn, select the service template from Proton. If the selected service template includes a service pipeline definition, they provide a link to their source code repository. Proton then deploys and manages the infrastructure defined by the selected service template. For more information, see Proton templates in the Proton User Guide.

```sql
INSERT INTO aws.proton.service_templates (
description,
displayName,
encryptionKey,
name,
pipelineProvisioning,
tags,
region
)
SELECT 
'{{ description }}',
'{{ displayName }}',
'{{ encryptionKey }}',
'{{ name }}' /* required */,
'{{ pipelineProvisioning }}',
'{{ tags }}',
'{{ region }}'
RETURNING
serviceTemplate
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: service_templates
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the service_templates resource.
    - name: description
      value: "{{ description }}"
      description: |
        A description of the service template.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        The name of the service template as displayed in the developer interface.
    - name: encryptionKey
      value: "{{ encryptionKey }}"
      description: |
        A customer provided encryption key that's used to encrypt data.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the service template.
    - name: pipelineProvisioning
      value: "{{ pipelineProvisioning }}"
      description: |
        By default, Proton provides a service pipeline for your service. When this parameter is included, it indicates that an Proton service pipeline isn't provided for your service. After it's included, it can't be changed. For more information, see Template bundles in the Proton User Guide.
      valid_values: ['CUSTOMER_MANAGED']
    - name: tags
      description: |
        An optional list of metadata items that you can associate with the Proton service template. A tag is a key-value pair. For more information, see Proton resources and tagging in the Proton User Guide.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_service_template"
    values={[
        { label: 'update_service_template', value: 'update_service_template' }
    ]}
>
<TabItem value="update_service_template">

Update a service template.

```sql
UPDATE aws.proton.service_templates
SET 
description = '{{ description }}',
displayName = '{{ displayName }}',
name = '{{ name }}'
WHERE 
region = '{{ region }}' --required
AND name = '{{ name }}' --required
RETURNING
serviceTemplate;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_service_template"
    values={[
        { label: 'delete_service_template', value: 'delete_service_template' }
    ]}
>
<TabItem value="delete_service_template">

If no other major or minor versions of the service template exist, delete the service template.

```sql
DELETE FROM aws.proton.service_templates
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
