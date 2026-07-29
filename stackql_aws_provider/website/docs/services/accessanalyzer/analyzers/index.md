--- 
title: analyzers
hide_title: false
hide_table_of_contents: false
keywords:
  - analyzers
  - accessanalyzer
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

Creates, updates, deletes, gets or lists an <code>analyzers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="analyzers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.accessanalyzer.analyzers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_analyzer"
    values={[
        { label: 'get_analyzer', value: 'get_analyzer' },
        { label: 'list_analyzers', value: 'list_analyzers' }
    ]}
>
<TabItem value="get_analyzer">

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
    <td>The name of the analyzer. (pattern: &lt;code&gt;&#91;A-Za-z&#93;&#91;A-Za-z0-9_.-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the analyzer. (pattern: &lt;code&gt;&#91;^:&#93;*:&#91;^:&#93;*:&#91;^:&#93;*:&#91;^:&#93;*:&#91;^:&#93;*:analyzer/.&#123;1,255&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Contains information about the configuration of an analyzer for an Amazon Web Services organization or account.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp for the time at which the analyzer was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_resource_analyzed" /></td>
    <td><code>string</code></td>
    <td>The resource that was most recently analyzed by the analyzer.</td>
</tr>
<tr>
    <td><CopyableCode code="last_resource_analyzed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the most recently analyzed resource was analyzed.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the analyzer. An Active analyzer successfully monitors supported resources and generates new findings. The analyzer is Disabled when a user action, such as removing trusted access for Identity and Access Management Access Analyzer from Organizations, causes the analyzer to stop generating new findings. The status is Creating when the analyzer creation is in progress and Failed when the analyzer creation has failed. (ACTIVE, CREATING, DISABLED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>object</code></td>
    <td>The statusReason provides more details about the current status of the analyzer. For example, if the creation for the analyzer fails, a Failed status is returned. For an analyzer with organization as the type, this failure can be due to an issue with creating the service-linked roles required in the member accounts of the Amazon Web Services organization.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>An array of key-value pairs applied to the analyzer. The key-value pairs consist of the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. The tag key is a value that is 1 to 128 characters in length and cannot be prefixed with aws:. The tag value is a value that is 0 to 256 characters in length.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type represents the zone of trust or scope for the analyzer. (ACCOUNT, ORGANIZATION, ACCOUNT_UNUSED_ACCESS, ORGANIZATION_UNUSED_ACCESS, ACCOUNT_INTERNAL_ACCESS, ORGANIZATION_INTERNAL_ACCESS)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_analyzers">

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
    <td>The name of the analyzer. (pattern: &lt;code&gt;&#91;A-Za-z&#93;&#91;A-Za-z0-9_.-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the analyzer. (pattern: &lt;code&gt;&#91;^:&#93;*:&#91;^:&#93;*:&#91;^:&#93;*:&#91;^:&#93;*:&#91;^:&#93;*:analyzer/.&#123;1,255&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Contains information about the configuration of an analyzer for an Amazon Web Services organization or account.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp for the time at which the analyzer was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_resource_analyzed" /></td>
    <td><code>string</code></td>
    <td>The resource that was most recently analyzed by the analyzer.</td>
</tr>
<tr>
    <td><CopyableCode code="last_resource_analyzed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the most recently analyzed resource was analyzed.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the analyzer. An Active analyzer successfully monitors supported resources and generates new findings. The analyzer is Disabled when a user action, such as removing trusted access for Identity and Access Management Access Analyzer from Organizations, causes the analyzer to stop generating new findings. The status is Creating when the analyzer creation is in progress and Failed when the analyzer creation has failed. (ACTIVE, CREATING, DISABLED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>object</code></td>
    <td>The statusReason provides more details about the current status of the analyzer. For example, if the creation for the analyzer fails, a Failed status is returned. For an analyzer with organization as the type, this failure can be due to an issue with creating the service-linked roles required in the member accounts of the Amazon Web Services organization.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>An array of key-value pairs applied to the analyzer. The key-value pairs consist of the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. The tag key is a value that is 1 to 128 characters in length and cannot be prefixed with aws:. The tag value is a value that is 0 to 256 characters in length.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type represents the zone of trust or scope for the analyzer. (ACCOUNT, ORGANIZATION, ACCOUNT_UNUSED_ACCESS, ORGANIZATION_UNUSED_ACCESS, ACCOUNT_INTERNAL_ACCESS, ORGANIZATION_INTERNAL_ACCESS)</td>
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
    <td><a href="#get_analyzer"><CopyableCode code="get_analyzer" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-analyzer_name"><code>analyzer_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the specified analyzer.</td>
</tr>
<tr>
    <td><a href="#list_analyzers"><CopyableCode code="list_analyzers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td>Retrieves a list of analyzers.</td>
</tr>
<tr>
    <td><a href="#create_analyzer"><CopyableCode code="create_analyzer" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-analyzerName"><code>analyzerName</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Creates an analyzer for your account.</td>
</tr>
<tr>
    <td><a href="#update_analyzer"><CopyableCode code="update_analyzer" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-analyzer_name"><code>analyzer_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Modifies the configuration of an existing analyzer. This action is not supported for external access analyzers.</td>
</tr>
<tr>
    <td><a href="#delete_analyzer"><CopyableCode code="delete_analyzer" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-analyzer_name"><code>analyzer_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes the specified analyzer. When you delete an analyzer, IAM Access Analyzer is disabled for the account or organization in the current or specific Region. All findings that were generated by the analyzer are deleted. You cannot undo this action.</td>
</tr>
<tr>
    <td><a href="#apply_archive_rule"><CopyableCode code="apply_archive_rule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-analyzerArn"><code>analyzerArn</code></a>, <a href="#parameter-ruleName"><code>ruleName</code></a></td>
    <td></td>
    <td>Retroactively applies the archive rule to existing findings that meet the archive rule criteria.</td>
</tr>
<tr>
    <td><a href="#start_resource_scan"><CopyableCode code="start_resource_scan" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-analyzerArn"><code>analyzerArn</code></a>, <a href="#parameter-resourceArn"><code>resourceArn</code></a></td>
    <td></td>
    <td>Immediately starts a scan of the policies applied to the specified resource. This action is supported only for external access analyzers.</td>
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
<tr id="parameter-analyzer_name">
    <td><CopyableCode code="analyzer_name" /></td>
    <td><code>string</code></td>
    <td>The name of the analyzer to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A client token.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token used for pagination of results returned.</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of analyzer.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_analyzer"
    values={[
        { label: 'get_analyzer', value: 'get_analyzer' },
        { label: 'list_analyzers', value: 'list_analyzers' }
    ]}
>
<TabItem value="get_analyzer">

Retrieves information about the specified analyzer.

```sql
SELECT
name,
arn,
configuration,
created_at,
last_resource_analyzed,
last_resource_analyzed_at,
status,
status_reason,
tags,
type_
FROM aws.accessanalyzer.analyzers
WHERE analyzer_name = '{{ analyzer_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_analyzers">

Retrieves a list of analyzers.

```sql
SELECT
name,
arn,
configuration,
created_at,
last_resource_analyzed,
last_resource_analyzed_at,
status,
status_reason,
tags,
type_
FROM aws.accessanalyzer.analyzers
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND type = '{{ type }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_analyzer"
    values={[
        { label: 'create_analyzer', value: 'create_analyzer' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_analyzer">

Creates an analyzer for your account.

```sql
INSERT INTO aws.accessanalyzer.analyzers (
analyzerName,
type,
archiveRules,
tags,
clientToken,
configuration,
region
)
SELECT 
'{{ analyzerName }}' /* required */,
'{{ type }}' /* required */,
'{{ archiveRules }}',
'{{ tags }}',
'{{ clientToken }}',
'{{ configuration }}',
'{{ region }}'
RETURNING
arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: analyzers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the analyzers resource.
    - name: analyzerName
      value: "{{ analyzerName }}"
    - name: type
      value: "{{ type }}"
      valid_values: ['ACCOUNT', 'ORGANIZATION', 'ACCOUNT_UNUSED_ACCESS', 'ORGANIZATION_UNUSED_ACCESS', 'ACCOUNT_INTERNAL_ACCESS', 'ORGANIZATION_INTERNAL_ACCESS']
    - name: archiveRules
      value:
        - ruleName: "{{ ruleName }}"
          filter: "{{ filter }}"
    - name: tags
      value: "{{ tags }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: configuration
      description: |
        Contains information about the configuration of an analyzer for an Amazon Web Services organization or account.
      value:
        unusedAccess:
          unusedAccessAge: {{ unusedAccessAge }}
          analysisRule:
            exclusions:
              - accountIds: "{{ accountIds }}"
                resourceTags: "{{ resourceTags }}"
        internalAccess:
          analysisRule:
            inclusions:
              - accountIds: "{{ accountIds }}"
                resourceTypes: "{{ resourceTypes }}"
                resourceArns: "{{ resourceArns }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_analyzer"
    values={[
        { label: 'update_analyzer', value: 'update_analyzer' }
    ]}
>
<TabItem value="update_analyzer">

Modifies the configuration of an existing analyzer. This action is not supported for external access analyzers.

```sql
UPDATE aws.accessanalyzer.analyzers
SET 
configuration = '{{ configuration }}'
WHERE 
analyzer_name = '{{ analyzer_name }}' --required
AND region = '{{ region }}' --required
RETURNING
configuration;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_analyzer"
    values={[
        { label: 'delete_analyzer', value: 'delete_analyzer' }
    ]}
>
<TabItem value="delete_analyzer">

Deletes the specified analyzer. When you delete an analyzer, IAM Access Analyzer is disabled for the account or organization in the current or specific Region. All findings that were generated by the analyzer are deleted. You cannot undo this action.

```sql
DELETE FROM aws.accessanalyzer.analyzers
WHERE analyzer_name = '{{ analyzer_name }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="apply_archive_rule"
    values={[
        { label: 'apply_archive_rule', value: 'apply_archive_rule' },
        { label: 'start_resource_scan', value: 'start_resource_scan' }
    ]}
>
<TabItem value="apply_archive_rule">

Retroactively applies the archive rule to existing findings that meet the archive rule criteria.

```sql
EXEC aws.accessanalyzer.analyzers.apply_archive_rule 
@region='{{ region }}' --required 
@@json=
'{
"analyzerArn": "{{ analyzerArn }}", 
"ruleName": "{{ ruleName }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
<TabItem value="start_resource_scan">

Immediately starts a scan of the policies applied to the specified resource. This action is supported only for external access analyzers.

```sql
EXEC aws.accessanalyzer.analyzers.start_resource_scan 
@region='{{ region }}' --required 
@@json=
'{
"analyzerArn": "{{ analyzerArn }}", 
"resourceArn": "{{ resourceArn }}", 
"resourceOwnerAccount": "{{ resourceOwnerAccount }}"
}'
;
```
</TabItem>
</Tabs>
