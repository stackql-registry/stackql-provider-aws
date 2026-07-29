--- 
title: provisioning_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - provisioning_templates
  - iot
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

Creates, updates, deletes, gets or lists a <code>provisioning_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="provisioning_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.provisioning_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_provisioning_template"
    values={[
        { label: 'describe_provisioning_template', value: 'describe_provisioning_template' },
        { label: 'list_provisioning_templates', value: 'list_provisioning_templates' }
    ]}
>
<TabItem value="describe_provisioning_template">

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
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the provisioning template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="default_version_id" /></td>
    <td><code>integer</code></td>
    <td>The default fleet template version ID.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the provisioning template. (pattern: &lt;code&gt;&#91;^\p&#123;C&#125;&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>True if the provisioning template is enabled, otherwise false.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the provisioning template was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="pre_provisioning_hook" /></td>
    <td><code>object</code></td>
    <td>Structure that contains payloadVersion and targetArn.</td>
</tr>
<tr>
    <td><CopyableCode code="provisioning_role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the role associated with the provisioning template. This IoT role grants permission to provision a device.</td>
</tr>
<tr>
    <td><CopyableCode code="template_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the provisioning template.</td>
</tr>
<tr>
    <td><CopyableCode code="template_body" /></td>
    <td><code>string</code></td>
    <td>The JSON formatted contents of the provisioning template. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="template_name" /></td>
    <td><code>string</code></td>
    <td>The name of the provisioning template. (pattern: &lt;code&gt;^&#91;0-9A-Za-z_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type you define in a provisioning template. You can create a template with only one type. You can't change the template type after its creation. The default value is FLEET_PROVISIONING. For more information about provisioning template, see: Provisioning template. (FLEET_PROVISIONING, JITP)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_provisioning_templates">

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
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the provisioning template summary was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the provisioning template. (pattern: &lt;code&gt;&#91;^\p&#123;C&#125;&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>True if the fleet provision template is enabled, otherwise false.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the provisioning template summary was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="template_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the provisioning template.</td>
</tr>
<tr>
    <td><CopyableCode code="template_name" /></td>
    <td><code>string</code></td>
    <td>The name of the provisioning template. (pattern: &lt;code&gt;^&#91;0-9A-Za-z_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type you define in a provisioning template. You can create a template with only one type. You can't change the template type after its creation. The default value is FLEET_PROVISIONING. For more information about provisioning template, see: Provisioning template. (FLEET_PROVISIONING, JITP)</td>
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
    <td><a href="#describe_provisioning_template"><CopyableCode code="describe_provisioning_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-template_name"><code>template_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a provisioning template. Requires permission to access the DescribeProvisioningTemplate action.</td>
</tr>
<tr>
    <td><a href="#list_provisioning_templates"><CopyableCode code="list_provisioning_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the provisioning templates in your Amazon Web Services account. Requires permission to access the ListProvisioningTemplates action.</td>
</tr>
<tr>
    <td><a href="#create_provisioning_template"><CopyableCode code="create_provisioning_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-templateName"><code>templateName</code></a>, <a href="#parameter-templateBody"><code>templateBody</code></a>, <a href="#parameter-provisioningRoleArn"><code>provisioningRoleArn</code></a></td>
    <td></td>
    <td>Creates a provisioning template. Requires permission to access the CreateProvisioningTemplate action.</td>
</tr>
<tr>
    <td><a href="#update_provisioning_template"><CopyableCode code="update_provisioning_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-template_name"><code>template_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a provisioning template. Requires permission to access the UpdateProvisioningTemplate action.</td>
</tr>
<tr>
    <td><a href="#delete_provisioning_template"><CopyableCode code="delete_provisioning_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-template_name"><code>template_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a provisioning template. Requires permission to access the DeleteProvisioningTemplate action.</td>
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
<tr id="parameter-template_name">
    <td><CopyableCode code="template_name" /></td>
    <td><code>string</code></td>
    <td>The name of the fleet provision template to delete.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at one time.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_provisioning_template"
    values={[
        { label: 'describe_provisioning_template', value: 'describe_provisioning_template' },
        { label: 'list_provisioning_templates', value: 'list_provisioning_templates' }
    ]}
>
<TabItem value="describe_provisioning_template">

Returns information about a provisioning template. Requires permission to access the DescribeProvisioningTemplate action.

```sql
SELECT
creation_date,
default_version_id,
description,
enabled,
last_modified_date,
pre_provisioning_hook,
provisioning_role_arn,
template_arn,
template_body,
template_name,
type_
FROM aws.iot.provisioning_templates
WHERE template_name = '{{ template_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_provisioning_templates">

Lists the provisioning templates in your Amazon Web Services account. Requires permission to access the ListProvisioningTemplates action.

```sql
SELECT
creation_date,
description,
enabled,
last_modified_date,
template_arn,
template_name,
type_
FROM aws.iot.provisioning_templates
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_provisioning_template"
    values={[
        { label: 'create_provisioning_template', value: 'create_provisioning_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_provisioning_template">

Creates a provisioning template. Requires permission to access the CreateProvisioningTemplate action.

```sql
INSERT INTO aws.iot.provisioning_templates (
templateName,
description,
templateBody,
enabled,
provisioningRoleArn,
preProvisioningHook,
tags,
type,
region
)
SELECT 
'{{ templateName }}' /* required */,
'{{ description }}',
'{{ templateBody }}' /* required */,
{{ enabled }},
'{{ provisioningRoleArn }}' /* required */,
'{{ preProvisioningHook }}',
'{{ tags }}',
'{{ type }}',
'{{ region }}'
RETURNING
default_version_id,
template_arn,
template_name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: provisioning_templates
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the provisioning_templates resource.
    - name: templateName
      value: "{{ templateName }}"
    - name: description
      value: "{{ description }}"
    - name: templateBody
      value: "{{ templateBody }}"
    - name: enabled
      value: {{ enabled }}
    - name: provisioningRoleArn
      value: "{{ provisioningRoleArn }}"
    - name: preProvisioningHook
      description: |
        Structure that contains payloadVersion and targetArn.
      value:
        payloadVersion: "{{ payloadVersion }}"
        targetArn: "{{ targetArn }}"
    - name: tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: type
      value: "{{ type }}"
      valid_values: ['FLEET_PROVISIONING', 'JITP']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_provisioning_template"
    values={[
        { label: 'update_provisioning_template', value: 'update_provisioning_template' }
    ]}
>
<TabItem value="update_provisioning_template">

Updates a provisioning template. Requires permission to access the UpdateProvisioningTemplate action.

```sql
UPDATE aws.iot.provisioning_templates
SET 
description = '{{ description }}',
enabled = {{ enabled }},
defaultVersionId = {{ defaultVersionId }},
provisioningRoleArn = '{{ provisioningRoleArn }}',
preProvisioningHook = '{{ preProvisioningHook }}',
removePreProvisioningHook = {{ removePreProvisioningHook }}
WHERE 
template_name = '{{ template_name }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_provisioning_template"
    values={[
        { label: 'delete_provisioning_template', value: 'delete_provisioning_template' }
    ]}
>
<TabItem value="delete_provisioning_template">

Deletes a provisioning template. Requires permission to access the DeleteProvisioningTemplate action.

```sql
DELETE FROM aws.iot.provisioning_templates
WHERE template_name = '{{ template_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
