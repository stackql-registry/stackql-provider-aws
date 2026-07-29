--- 
title: capabilities
hide_title: false
hide_table_of_contents: false
keywords:
  - capabilities
  - b2bi
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

Creates, updates, deletes, gets or lists a <code>capabilities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="capabilities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.b2bi.capabilities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_capability"
    values={[
        { label: 'get_capability', value: 'get_capability' },
        { label: 'list_capabilities', value: 'list_capabilities' }
    ]}
>
<TabItem value="get_capability">

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
    <td>Returns the name of the capability, used to identify it.</td>
</tr>
<tr>
    <td><CopyableCode code="capability_arn" /></td>
    <td><code>string</code></td>
    <td>Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.</td>
</tr>
<tr>
    <td><CopyableCode code="capability_id" /></td>
    <td><code>string</code></td>
    <td>Returns a system-assigned unique identifier for the capability. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Returns a structure that contains the details for a capability.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns a timestamp for creation date and time of the capability.</td>
</tr>
<tr>
    <td><CopyableCode code="instructions_documents" /></td>
    <td><code>array</code></td>
    <td>Returns one or more locations in Amazon S3, each specifying an EDI document that can be used with this capability. Each item contains the name of the bucket and the key, to identify the document's location.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns a timestamp for last time the capability was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>Returns the type of the capability. Currently, only edi is supported. (edi)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_capabilities">

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
    <td>The display name of the capability.</td>
</tr>
<tr>
    <td><CopyableCode code="capability_id" /></td>
    <td><code>string</code></td>
    <td>Returns a system-assigned unique identifier for the capability. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns a timestamp for creation date and time of the capability.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns a timestamp that identifies the most recent date and time that the capability was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>Returns the type of the capability. Currently, only edi is supported. (edi)</td>
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
    <td><a href="#get_capability"><CopyableCode code="get_capability" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details for the specified capability. A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.</td>
</tr>
<tr>
    <td><a href="#list_capabilities"><CopyableCode code="list_capabilities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the capabilities associated with your Amazon Web Services account for your current or specified region. A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.</td>
</tr>
<tr>
    <td><a href="#create_capability"><CopyableCode code="create_capability" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-configuration"><code>configuration</code></a></td>
    <td></td>
    <td>Instantiates a capability based on the specified parameters. A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.</td>
</tr>
<tr>
    <td><a href="#update_capability"><CopyableCode code="update_capability" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-capabilityId"><code>capabilityId</code></a></td>
    <td></td>
    <td>Updates some of the parameters for a capability, based on the specified parameters. A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.</td>
</tr>
<tr>
    <td><a href="#delete_capability"><CopyableCode code="delete_capability" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified capability. A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.</td>
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
    defaultValue="get_capability"
    values={[
        { label: 'get_capability', value: 'get_capability' },
        { label: 'list_capabilities', value: 'list_capabilities' }
    ]}
>
<TabItem value="get_capability">

Retrieves the details for the specified capability. A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.

```sql
SELECT
name,
capability_arn,
capability_id,
configuration,
created_at,
instructions_documents,
modified_at,
type_
FROM aws.b2bi.capabilities
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_capabilities">

Lists the capabilities associated with your Amazon Web Services account for your current or specified region. A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.

```sql
SELECT
name,
capability_id,
created_at,
modified_at,
type_
FROM aws.b2bi.capabilities
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_capability"
    values={[
        { label: 'create_capability', value: 'create_capability' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_capability">

Instantiates a capability based on the specified parameters. A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.

```sql
INSERT INTO aws.b2bi.capabilities (
name,
type,
configuration,
instructionsDocuments,
clientToken,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ type }}' /* required */,
'{{ configuration }}' /* required */,
'{{ instructionsDocuments }}',
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
name,
capability_arn,
capability_id,
configuration,
created_at,
instructions_documents,
type_
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: capabilities
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the capabilities resource.
    - name: name
      value: "{{ name }}"
      description: |
        Specifies the name of the capability, used to identify it.
    - name: type
      value: "{{ type }}"
      description: |
        Specifies the type of the capability. Currently, only edi is supported.
      valid_values: ['edi']
    - name: configuration
      description: |
        Specifies a structure that contains the details for a capability.
      value:
        edi:
          capabilityDirection: "{{ capabilityDirection }}"
          type_:
            x12Details:
              transactionSet: "{{ transactionSet }}"
              version: "{{ version }}"
          inputLocation:
            bucketName: "{{ bucketName }}"
            key: "{{ key }}"
          outputLocation:
            bucketName: "{{ bucketName }}"
            key: "{{ key }}"
          transformerId: "{{ transformerId }}"
    - name: instructionsDocuments
      description: |
        Specifies one or more locations in Amazon S3, each specifying an EDI document that can be used with this capability. Each item contains the name of the bucket and the key, to identify the document's location.
      value:
        - bucketName: "{{ bucketName }}"
          key: "{{ key }}"
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        Reserved for future use.
    - name: tags
      description: |
        Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_capability"
    values={[
        { label: 'update_capability', value: 'update_capability' }
    ]}
>
<TabItem value="update_capability">

Updates some of the parameters for a capability, based on the specified parameters. A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.

```sql
UPDATE aws.b2bi.capabilities
SET 
capabilityId = '{{ capabilityId }}',
name = '{{ name }}',
configuration = '{{ configuration }}',
instructionsDocuments = '{{ instructionsDocuments }}'
WHERE 
region = '{{ region }}' --required
AND capabilityId = '{{ capabilityId }}' --required
RETURNING
name,
capability_arn,
capability_id,
configuration,
created_at,
instructions_documents,
modified_at,
type_;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_capability"
    values={[
        { label: 'delete_capability', value: 'delete_capability' }
    ]}
>
<TabItem value="delete_capability">

Deletes the specified capability. A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.

```sql
DELETE FROM aws.b2bi.capabilities
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
