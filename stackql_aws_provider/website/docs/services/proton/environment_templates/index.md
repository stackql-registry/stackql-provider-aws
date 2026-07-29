--- 
title: environment_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - environment_templates
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

Creates, updates, deletes, gets or lists an <code>environment_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="environment_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.proton.environment_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_environment_template"
    values={[
        { label: 'get_environment_template', value: 'get_environment_template' },
        { label: 'list_environment_templates', value: 'list_environment_templates' }
    ]}
>
<TabItem value="get_environment_template">

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
    <td>The name of the environment template. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the environment template.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the environment template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the environment template.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The name of the environment template as displayed in the developer interface.</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_key" /></td>
    <td><code>string</code></td>
    <td>The customer provided encryption key for the environment template. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov):&#91;a-zA-Z0-9-&#93;+:&#91;a-zA-Z0-9-&#93;*:\d&#123;12&#125;:(&#91;\w+=,.@-&#93;+&#91;/:&#93;)*&#91;\w+=,.@-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the environment template was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="provisioning" /></td>
    <td><code>string</code></td>
    <td>When included, indicates that the environment template is for customer provisioned and managed infrastructure. (CUSTOMER_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="recommended_version" /></td>
    <td><code>string</code></td>
    <td>The ID of the recommended version of the environment template. (pattern: &lt;code&gt;^(0|(&#91;1-9&#93;&#123;1&#125;\d*)).(0|(&#91;1-9&#93;&#123;1&#125;\d*))$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_environment_templates">

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
    <td>The name of the environment template. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the environment template.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the environment template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the environment template.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The name of the environment template as displayed in the developer interface.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the environment template was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="provisioning" /></td>
    <td><code>string</code></td>
    <td>When included, indicates that the environment template is for customer provisioned and managed infrastructure. (CUSTOMER_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="recommended_version" /></td>
    <td><code>string</code></td>
    <td>The recommended version of the environment template. (pattern: &lt;code&gt;^(0|(&#91;1-9&#93;&#123;1&#125;\d*)).(0|(&#91;1-9&#93;&#123;1&#125;\d*))$&lt;/code&gt;)</td>
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
    <td><a href="#get_environment_template"><CopyableCode code="get_environment_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get detailed data for an environment template.</td>
</tr>
<tr>
    <td><a href="#list_environment_templates"><CopyableCode code="list_environment_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List environment templates.</td>
</tr>
<tr>
    <td><a href="#create_environment_template"><CopyableCode code="create_environment_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Create an environment template for Proton. For more information, see Environment Templates in the Proton User Guide. You can create an environment template in one of the two following ways: Register and publish a standard environment template that instructs Proton to deploy and manage environment infrastructure. Register and publish a customer managed environment template that connects Proton to your existing provisioned infrastructure that you manage. Proton doesn't manage your existing provisioned infrastructure. To create an environment template for customer provisioned and managed infrastructure, include the provisioning parameter and set the value to CUSTOMER_MANAGED. For more information, see Register and publish an environment template in the Proton User Guide.</td>
</tr>
<tr>
    <td><a href="#update_environment_template"><CopyableCode code="update_environment_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Update an environment template.</td>
</tr>
<tr>
    <td><a href="#delete_environment_template"><CopyableCode code="delete_environment_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>If no other major or minor versions of an environment template exist, delete the environment template.</td>
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
    defaultValue="get_environment_template"
    values={[
        { label: 'get_environment_template', value: 'get_environment_template' },
        { label: 'list_environment_templates', value: 'list_environment_templates' }
    ]}
>
<TabItem value="get_environment_template">

Get detailed data for an environment template.

```sql
SELECT
name,
arn,
created_at,
description,
display_name,
encryption_key,
last_modified_at,
provisioning,
recommended_version
FROM aws.proton.environment_templates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_environment_templates">

List environment templates.

```sql
SELECT
name,
arn,
created_at,
description,
display_name,
last_modified_at,
provisioning,
recommended_version
FROM aws.proton.environment_templates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_environment_template"
    values={[
        { label: 'create_environment_template', value: 'create_environment_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_environment_template">

Create an environment template for Proton. For more information, see Environment Templates in the Proton User Guide. You can create an environment template in one of the two following ways: Register and publish a standard environment template that instructs Proton to deploy and manage environment infrastructure. Register and publish a customer managed environment template that connects Proton to your existing provisioned infrastructure that you manage. Proton doesn't manage your existing provisioned infrastructure. To create an environment template for customer provisioned and managed infrastructure, include the provisioning parameter and set the value to CUSTOMER_MANAGED. For more information, see Register and publish an environment template in the Proton User Guide.

```sql
INSERT INTO aws.proton.environment_templates (
description,
displayName,
encryptionKey,
name,
provisioning,
tags,
region
)
SELECT 
'{{ description }}',
'{{ displayName }}',
'{{ encryptionKey }}',
'{{ name }}' /* required */,
'{{ provisioning }}',
'{{ tags }}',
'{{ region }}'
RETURNING
environment_template
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: environment_templates
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the environment_templates resource.
    - name: description
      value: "{{ description }}"
      description: |
        A description of the environment template.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        The environment template name as displayed in the developer interface.
    - name: encryptionKey
      value: "{{ encryptionKey }}"
      description: |
        A customer provided encryption key that Proton uses to encrypt data.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the environment template.
    - name: provisioning
      value: "{{ provisioning }}"
      description: |
        When included, indicates that the environment template is for customer provisioned and managed infrastructure.
      valid_values: ['CUSTOMER_MANAGED']
    - name: tags
      description: |
        An optional list of metadata items that you can associate with the Proton environment template. A tag is a key-value pair. For more information, see Proton resources and tagging in the Proton User Guide.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_environment_template"
    values={[
        { label: 'update_environment_template', value: 'update_environment_template' }
    ]}
>
<TabItem value="update_environment_template">

Update an environment template.

```sql
UPDATE aws.proton.environment_templates
SET 
description = '{{ description }}',
displayName = '{{ displayName }}',
name = '{{ name }}'
WHERE 
region = '{{ region }}' --required
AND name = '{{ name }}' --required
RETURNING
environment_template;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_environment_template"
    values={[
        { label: 'delete_environment_template', value: 'delete_environment_template' }
    ]}
>
<TabItem value="delete_environment_template">

If no other major or minor versions of an environment template exist, delete the environment template.

```sql
DELETE FROM aws.proton.environment_templates
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
