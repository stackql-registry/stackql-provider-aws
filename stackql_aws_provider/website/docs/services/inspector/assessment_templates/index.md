--- 
title: assessment_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - assessment_templates
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

Creates, updates, deletes, gets or lists an <code>assessment_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="assessment_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector.assessment_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_assessment_templates"
    values={[
        { label: 'describe_assessment_templates', value: 'describe_assessment_templates' },
        { label: 'list_assessment_templates', value: 'list_assessment_templates' }
    ]}
>
<TabItem value="describe_assessment_templates">

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
    <td><CopyableCode code="assessment_templates" /></td>
    <td><code>array</code></td>
    <td>Information about the assessment templates.</td>
</tr>
<tr>
    <td><CopyableCode code="failed_items" /></td>
    <td><code>object</code></td>
    <td>Assessment template details that cannot be described. An error code is provided for each failed item.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_assessment_templates">

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
    <td><CopyableCode code="assessment_template_arn" /></td>
    <td><code>string</code></td>
    <td>A list of ARNs that specifies the assessment templates returned by the action.</td>
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
    <td><a href="#describe_assessment_templates"><CopyableCode code="describe_assessment_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the assessment templates that are specified by the ARNs of the assessment templates.</td>
</tr>
<tr>
    <td><a href="#list_assessment_templates"><CopyableCode code="list_assessment_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the assessment templates that correspond to the assessment targets that are specified by the ARNs of the assessment targets.</td>
</tr>
<tr>
    <td><a href="#create_assessment_template"><CopyableCode code="create_assessment_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-assessmentTargetArn"><code>assessmentTargetArn</code></a>, <a href="#parameter-assessmentTemplateName"><code>assessmentTemplateName</code></a>, <a href="#parameter-durationInSeconds"><code>durationInSeconds</code></a>, <a href="#parameter-rulesPackageArns"><code>rulesPackageArns</code></a></td>
    <td></td>
    <td>Creates an assessment template for the assessment target that is specified by the ARN of the assessment target. If the service-linked role isn’t already registered, this action also creates and registers a service-linked role to grant Amazon Inspector access to AWS Services needed to perform security assessments.</td>
</tr>
<tr>
    <td><a href="#delete_assessment_template"><CopyableCode code="delete_assessment_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the assessment template that is specified by the ARN of the assessment template.</td>
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
    defaultValue="describe_assessment_templates"
    values={[
        { label: 'describe_assessment_templates', value: 'describe_assessment_templates' },
        { label: 'list_assessment_templates', value: 'list_assessment_templates' }
    ]}
>
<TabItem value="describe_assessment_templates">

Describes the assessment templates that are specified by the ARNs of the assessment templates.

```sql
SELECT
assessment_templates,
failed_items
FROM aws.inspector.assessment_templates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_assessment_templates">

Lists the assessment templates that correspond to the assessment targets that are specified by the ARNs of the assessment targets.

```sql
SELECT
assessment_template_arn
FROM aws.inspector.assessment_templates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_assessment_template"
    values={[
        { label: 'create_assessment_template', value: 'create_assessment_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_assessment_template">

Creates an assessment template for the assessment target that is specified by the ARN of the assessment target. If the service-linked role isn’t already registered, this action also creates and registers a service-linked role to grant Amazon Inspector access to AWS Services needed to perform security assessments.

```sql
INSERT INTO aws.inspector.assessment_templates (
assessmentTargetArn,
assessmentTemplateName,
durationInSeconds,
rulesPackageArns,
userAttributesForFindings,
region
)
SELECT 
'{{ assessmentTargetArn }}' /* required */,
'{{ assessmentTemplateName }}' /* required */,
{{ durationInSeconds }} /* required */,
'{{ rulesPackageArns }}' /* required */,
'{{ userAttributesForFindings }}',
'{{ region }}'
RETURNING
assessment_template_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: assessment_templates
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the assessment_templates resource.
    - name: assessmentTargetArn
      value: "{{ assessmentTargetArn }}"
      description: |
        The ARN that specifies the assessment target for which you want to create the assessment template.
    - name: assessmentTemplateName
      value: "{{ assessmentTemplateName }}"
      description: |
        The user-defined name that identifies the assessment template that you want to create. You can create several assessment templates for an assessment target. The names of the assessment templates that correspond to a particular assessment target must be unique.
    - name: durationInSeconds
      value: {{ durationInSeconds }}
      description: |
        The duration of the assessment run in seconds.
    - name: rulesPackageArns
      value:
        - "{{ rulesPackageArns }}"
      description: |
        The ARNs that specify the rules packages that you want to attach to the assessment template.
    - name: userAttributesForFindings
      description: |
        The user-defined attributes that are assigned to every finding that is generated by the assessment run that uses this assessment template. An attribute is a key and value pair (an Attribute object). Within an assessment template, each key must be unique.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_assessment_template"
    values={[
        { label: 'delete_assessment_template', value: 'delete_assessment_template' }
    ]}
>
<TabItem value="delete_assessment_template">

Deletes the assessment template that is specified by the ARN of the assessment template.

```sql
DELETE FROM aws.inspector.assessment_templates
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
