--- 
title: code_signing_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - code_signing_configs
  - lambda
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

Creates, updates, deletes, gets or lists a <code>code_signing_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="code_signing_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lambda.code_signing_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_code_signing_config"
    values={[
        { label: 'get_code_signing_config', value: 'get_code_signing_config' },
        { label: 'list_code_signing_configs', value: 'list_code_signing_configs' }
    ]}
>
<TabItem value="get_code_signing_config">

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
    <td><CopyableCode code="AllowedPublishers" /></td>
    <td><code>object</code></td>
    <td>List of signing profiles that can sign a code package.</td>
</tr>
<tr>
    <td><CopyableCode code="CodeSigningConfigArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Code signing configuration. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:lambda:&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(b?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:code-signing-config:csc-&#91;a-z0-9&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CodeSigningConfigId" /></td>
    <td><code>string</code></td>
    <td>Unique identifer for the Code signing configuration. (pattern: &lt;code&gt;csc-&#91;a-zA-Z0-9-_\.&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CodeSigningPolicies" /></td>
    <td><code>object</code></td>
    <td>Code signing configuration policies specify the validation failure action for signature mismatch or expiry.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>Code signing configuration description.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModified" /></td>
    <td><code>string</code></td>
    <td>The date and time that the Code signing configuration was last modified, in ISO-8601 format (YYYY-MM-DDThh:mm:ss.sTZD).</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_code_signing_configs">

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
    <td><CopyableCode code="AllowedPublishers" /></td>
    <td><code>object</code></td>
    <td>List of signing profiles that can sign a code package.</td>
</tr>
<tr>
    <td><CopyableCode code="CodeSigningConfigArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Code signing configuration. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:lambda:&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(b?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:code-signing-config:csc-&#91;a-z0-9&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CodeSigningConfigId" /></td>
    <td><code>string</code></td>
    <td>Unique identifer for the Code signing configuration. (pattern: &lt;code&gt;csc-&#91;a-zA-Z0-9-_\.&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CodeSigningPolicies" /></td>
    <td><code>object</code></td>
    <td>Code signing configuration policies specify the validation failure action for signature mismatch or expiry.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>Code signing configuration description.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModified" /></td>
    <td><code>string</code></td>
    <td>The date and time that the Code signing configuration was last modified, in ISO-8601 format (YYYY-MM-DDThh:mm:ss.sTZD).</td>
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
    <td><a href="#get_code_signing_config"><CopyableCode code="get_code_signing_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-code_signing_config_arn"><code>code_signing_config_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the specified code signing configuration.</td>
</tr>
<tr>
    <td><a href="#list_code_signing_configs"><CopyableCode code="list_code_signing_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Returns a list of code signing configurations. A request returns up to 10,000 configurations per call. You can use the MaxItems parameter to return fewer configurations per call.</td>
</tr>
<tr>
    <td><a href="#create_code_signing_config"><CopyableCode code="create_code_signing_config" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AllowedPublishers"><code>AllowedPublishers</code></a></td>
    <td></td>
    <td>Creates a code signing configuration. A code signing configuration defines a list of allowed signing profiles and defines the code-signing validation policy (action to be taken if deployment validation checks fail).</td>
</tr>
<tr>
    <td><a href="#update_code_signing_config"><CopyableCode code="update_code_signing_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-code_signing_config_arn"><code>code_signing_config_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update the code signing configuration. Changes to the code signing configuration take effect the next time a user tries to deploy a code package to the function.</td>
</tr>
<tr>
    <td><a href="#delete_code_signing_config"><CopyableCode code="delete_code_signing_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-code_signing_config_arn"><code>code_signing_config_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the code signing configuration. You can delete the code signing configuration only if no function is using it.</td>
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
<tr id="parameter-code_signing_config_arn">
    <td><CopyableCode code="code_signing_config_arn" /></td>
    <td><code>string</code></td>
    <td>The The Amazon Resource Name (ARN) of the code signing configuration.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of items to return.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_code_signing_config"
    values={[
        { label: 'get_code_signing_config', value: 'get_code_signing_config' },
        { label: 'list_code_signing_configs', value: 'list_code_signing_configs' }
    ]}
>
<TabItem value="get_code_signing_config">

Returns information about the specified code signing configuration.

```sql
SELECT
AllowedPublishers,
CodeSigningConfigArn,
CodeSigningConfigId,
CodeSigningPolicies,
Description,
LastModified
FROM aws.lambda.code_signing_configs
WHERE code_signing_config_arn = '{{ code_signing_config_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_code_signing_configs">

Returns a list of code signing configurations. A request returns up to 10,000 configurations per call. You can use the MaxItems parameter to return fewer configurations per call.

```sql
SELECT
AllowedPublishers,
CodeSigningConfigArn,
CodeSigningConfigId,
CodeSigningPolicies,
Description,
LastModified
FROM aws.lambda.code_signing_configs
WHERE region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_code_signing_config"
    values={[
        { label: 'create_code_signing_config', value: 'create_code_signing_config' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_code_signing_config">

Creates a code signing configuration. A code signing configuration defines a list of allowed signing profiles and defines the code-signing validation policy (action to be taken if deployment validation checks fail).

```sql
INSERT INTO aws.lambda.code_signing_configs (
Description,
AllowedPublishers,
CodeSigningPolicies,
Tags,
region
)
SELECT 
'{{ Description }}',
'{{ AllowedPublishers }}' /* required */,
'{{ CodeSigningPolicies }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
CodeSigningConfig
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: code_signing_configs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the code_signing_configs resource.
    - name: Description
      value: "{{ Description }}"
    - name: AllowedPublishers
      description: |
        List of signing profiles that can sign a code package.
      value:
        SigningProfileVersionArns:
          - "{{ SigningProfileVersionArns }}"
    - name: CodeSigningPolicies
      description: |
        Code signing configuration policies specify the validation failure action for signature mismatch or expiry.
      value:
        UntrustedArtifactOnDeployment: "{{ UntrustedArtifactOnDeployment }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_code_signing_config"
    values={[
        { label: 'update_code_signing_config', value: 'update_code_signing_config' }
    ]}
>
<TabItem value="update_code_signing_config">

Update the code signing configuration. Changes to the code signing configuration take effect the next time a user tries to deploy a code package to the function.

```sql
UPDATE aws.lambda.code_signing_configs
SET 
Description = '{{ Description }}',
AllowedPublishers = '{{ AllowedPublishers }}',
CodeSigningPolicies = '{{ CodeSigningPolicies }}'
WHERE 
code_signing_config_arn = '{{ code_signing_config_arn }}' --required
AND region = '{{ region }}' --required
RETURNING
CodeSigningConfig;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_code_signing_config"
    values={[
        { label: 'delete_code_signing_config', value: 'delete_code_signing_config' }
    ]}
>
<TabItem value="delete_code_signing_config">

Deletes the code signing configuration. You can delete the code signing configuration only if no function is using it.

```sql
DELETE FROM aws.lambda.code_signing_configs
WHERE code_signing_config_arn = '{{ code_signing_config_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
