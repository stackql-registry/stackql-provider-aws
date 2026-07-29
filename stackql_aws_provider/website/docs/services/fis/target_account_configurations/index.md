--- 
title: target_account_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - target_account_configurations
  - fis
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

Creates, updates, deletes, gets or lists a <code>target_account_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="target_account_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.fis.target_account_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_target_account_configuration"
    values={[
        { label: 'get_target_account_configuration', value: 'get_target_account_configuration' },
        { label: 'list_target_account_configurations', value: 'list_target_account_configurations' }
    ]}
>
<TabItem value="get_target_account_configuration">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the target account. (pattern: &lt;code&gt;&#91;\S&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the target account. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an IAM role for the target account. (pattern: &lt;code&gt;&#91;\S&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_target_account_configurations">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the target account. (pattern: &lt;code&gt;&#91;\S&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the target account. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an IAM role for the target account. (pattern: &lt;code&gt;&#91;\S&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_target_account_configuration"><CopyableCode code="get_target_account_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified target account configuration of the experiment template.</td>
</tr>
<tr>
    <td><a href="#list_target_account_configurations"><CopyableCode code="list_target_account_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the target account configurations of the specified experiment template.</td>
</tr>
<tr>
    <td><a href="#create_target_account_configuration"><CopyableCode code="create_target_account_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a></td>
    <td></td>
    <td>Creates a target account configuration for the experiment template. A target account configuration is required when accountTargeting of experimentOptions is set to multi-account. For more information, see experiment options in the Fault Injection Service User Guide.</td>
</tr>
<tr>
    <td><a href="#update_target_account_configuration"><CopyableCode code="update_target_account_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the target account configuration for the specified experiment template.</td>
</tr>
<tr>
    <td><a href="#delete_target_account_configuration"><CopyableCode code="delete_target_account_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified target account configuration of the experiment template.</td>
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
<tr id="parameter-account_id">
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the target account.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the experiment template.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_target_account_configuration"
    values={[
        { label: 'get_target_account_configuration', value: 'get_target_account_configuration' },
        { label: 'list_target_account_configurations', value: 'list_target_account_configurations' }
    ]}
>
<TabItem value="get_target_account_configuration">

Gets information about the specified target account configuration of the experiment template.

```sql
SELECT
account_id,
description,
role_arn
FROM aws.fis.target_account_configurations
WHERE id = '{{ id }}' -- required
AND account_id = '{{ account_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_target_account_configurations">

Lists the target account configurations of the specified experiment template.

```sql
SELECT
account_id,
description,
role_arn
FROM aws.fis.target_account_configurations
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_target_account_configuration"
    values={[
        { label: 'create_target_account_configuration', value: 'create_target_account_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_target_account_configuration">

Creates a target account configuration for the experiment template. A target account configuration is required when accountTargeting of experimentOptions is set to multi-account. For more information, see experiment options in the Fault Injection Service User Guide.

```sql
INSERT INTO aws.fis.target_account_configurations (
clientToken,
roleArn,
description,
id,
account_id,
region
)
SELECT 
'{{ clientToken }}',
'{{ roleArn }}' /* required */,
'{{ description }}',
'{{ id }}',
'{{ account_id }}',
'{{ region }}'
RETURNING
target_account_configuration
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: target_account_configurations
  props:
    - name: id
      value: "{{ id }}"
      description: Required parameter for the target_account_configurations resource.
    - name: account_id
      value: "{{ account_id }}"
      description: Required parameter for the target_account_configurations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the target_account_configurations resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: description
      value: "{{ description }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_target_account_configuration"
    values={[
        { label: 'update_target_account_configuration', value: 'update_target_account_configuration' }
    ]}
>
<TabItem value="update_target_account_configuration">

Updates the target account configuration for the specified experiment template.

```sql
UPDATE aws.fis.target_account_configurations
SET 
roleArn = '{{ roleArn }}',
description = '{{ description }}'
WHERE 
id = '{{ id }}' --required
AND account_id = '{{ account_id }}' --required
AND region = '{{ region }}' --required
RETURNING
target_account_configuration;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_target_account_configuration"
    values={[
        { label: 'delete_target_account_configuration', value: 'delete_target_account_configuration' }
    ]}
>
<TabItem value="delete_target_account_configuration">

Deletes the specified target account configuration of the experiment template.

```sql
DELETE FROM aws.fis.target_account_configurations
WHERE id = '{{ id }}' --required
AND account_id = '{{ account_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
