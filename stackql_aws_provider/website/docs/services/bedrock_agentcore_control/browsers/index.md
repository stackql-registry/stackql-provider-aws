--- 
title: browsers
hide_title: false
hide_table_of_contents: false
keywords:
  - browsers
  - bedrock_agentcore_control
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

Creates, updates, deletes, gets or lists a <code>browsers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="browsers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.browsers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_browser"
    values={[
        { label: 'get_browser', value: 'get_browser' },
        { label: 'list_browsers', value: 'list_browsers' }
    ]}
>
<TabItem value="get_browser">

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
    <td>The name of the browser. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="browser_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the browser. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock-agentcore:&#91;a-z0-9-&#93;+:(aws|&#91;0-9&#93;&#123;12&#125;):browser(-custom)?/(aws\.browser\.v1|&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="browser_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the browser. (pattern: &lt;code&gt;(aws\.browser\.v1|&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="browser_signing" /></td>
    <td><code>object</code></td>
    <td>The browser signing configuration that shows whether cryptographic agent identification is enabled for web bot authentication.</td>
</tr>
<tr>
    <td><CopyableCode code="certificates" /></td>
    <td><code>array</code></td>
    <td>The list of certificates configured for the browser.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the browser was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the browser.</td>
</tr>
<tr>
    <td><CopyableCode code="enterprise_policies" /></td>
    <td><code>array</code></td>
    <td>The list of enterprise policy files configured for the browser.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_role_arn" /></td>
    <td><code>string</code></td>
    <td>The IAM role ARN that provides permissions for the browser. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::(&#91;0-9&#93;&#123;12&#125;)?:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for failure if the browser is in a failed state.</td>
</tr>
<tr>
    <td><CopyableCode code="filesystem_configurations" /></td>
    <td><code>array</code></td>
    <td>The file system configurations to mount into the session. Each configuration maps an access point to a path inside the session. You can specify up to 4 configurations. The maximum is 2 Amazon Simple Storage Service (Amazon S3) Files access points and 2 Amazon Elastic File System (Amazon EFS) access points.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the browser was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="network_configuration" /></td>
    <td><code>object</code></td>
    <td>The network configuration for a browser. This structure defines how the browser connects to the network.</td>
</tr>
<tr>
    <td><CopyableCode code="recording" /></td>
    <td><code>object</code></td>
    <td>The recording configuration for a browser. This structure defines how browser sessions are recorded.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the browser. (CREATING, CREATE_FAILED, READY, DELETING, DELETE_FAILED, DELETED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_browsers">

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
    <td>The name of the browser. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="browser_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the browser. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock-agentcore:&#91;a-z0-9-&#93;+:(aws|&#91;0-9&#93;&#123;12&#125;):browser(-custom)?/(aws\.browser\.v1|&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="browser_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the browser. (pattern: &lt;code&gt;(aws\.browser\.v1|&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the browser was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the browser.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the browser was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the browser. (CREATING, CREATE_FAILED, READY, DELETING, DELETE_FAILED, DELETED)</td>
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
    <td><a href="#get_browser"><CopyableCode code="get_browser" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-browser_id"><code>browser_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a custom browser.</td>
</tr>
<tr>
    <td><a href="#list_browsers"><CopyableCode code="list_browsers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td>Lists all custom browsers in your account.</td>
</tr>
<tr>
    <td><a href="#create_browser"><CopyableCode code="create_browser" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-networkConfiguration"><code>networkConfiguration</code></a></td>
    <td></td>
    <td>Creates a custom browser.</td>
</tr>
<tr>
    <td><a href="#delete_browser"><CopyableCode code="delete_browser" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-browser_id"><code>browser_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes a custom browser.</td>
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
<tr id="parameter-browser_id">
    <td><CopyableCode code="browser_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the browser to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier to ensure idempotency of the request.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call. The default value is 10. The maximum value is 50.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of browsers to list. If not specified, all browser types are returned.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_browser"
    values={[
        { label: 'get_browser', value: 'get_browser' },
        { label: 'list_browsers', value: 'list_browsers' }
    ]}
>
<TabItem value="get_browser">

Gets information about a custom browser.

```sql
SELECT
name,
browser_arn,
browser_id,
browser_signing,
certificates,
created_at,
description,
enterprise_policies,
execution_role_arn,
failure_reason,
filesystem_configurations,
last_updated_at,
network_configuration,
recording,
status
FROM aws.bedrock_agentcore_control.browsers
WHERE browser_id = '{{ browser_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_browsers">

Lists all custom browsers in your account.

```sql
SELECT
name,
browser_arn,
browser_id,
created_at,
description,
last_updated_at,
status
FROM aws.bedrock_agentcore_control.browsers
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND type = '{{ type }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_browser"
    values={[
        { label: 'create_browser', value: 'create_browser' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_browser">

Creates a custom browser.

```sql
INSERT INTO aws.bedrock_agentcore_control.browsers (
name,
description,
executionRoleArn,
networkConfiguration,
recording,
browserSigning,
enterprisePolicies,
certificates,
filesystemConfigurations,
clientToken,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ executionRoleArn }}',
'{{ networkConfiguration }}' /* required */,
'{{ recording }}',
'{{ browserSigning }}',
'{{ enterprisePolicies }}',
'{{ certificates }}',
'{{ filesystemConfigurations }}',
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
browser_arn,
browser_id,
created_at,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: browsers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the browsers resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: executionRoleArn
      value: "{{ executionRoleArn }}"
    - name: networkConfiguration
      description: |
        The network configuration for a browser. This structure defines how the browser connects to the network.
      value:
        networkMode: "{{ networkMode }}"
        vpcConfig:
          securityGroups:
            - "{{ securityGroups }}"
          subnets:
            - "{{ subnets }}"
          requireServiceS3Endpoint: {{ requireServiceS3Endpoint }}
    - name: recording
      description: |
        The recording configuration for a browser. This structure defines how browser sessions are recorded.
      value:
        enabled: {{ enabled }}
        s3Location:
          bucket: "{{ bucket }}"
          prefix: "{{ prefix }}"
          versionId: "{{ versionId }}"
    - name: browserSigning
      description: |
        Configuration for enabling browser signing capabilities that allow agents to cryptographically identify themselves to websites using HTTP message signatures.
      value:
        enabled: {{ enabled }}
    - name: enterprisePolicies
      value:
        - location:
            s3:
              bucket: "{{ bucket }}"
              prefix: "{{ prefix }}"
              versionId: "{{ versionId }}"
          type_: "{{ type_ }}"
    - name: certificates
      value:
        - location:
            secretsManager:
              secretArn: "{{ secretArn }}"
    - name: filesystemConfigurations
      description: |
        The file system configurations to mount into the session. Each configuration maps an access point to a path inside the session. You can specify up to 4 configurations. The maximum is 2 Amazon Simple Storage Service (Amazon S3) Files access points and 2 Amazon Elastic File System (Amazon EFS) access points.
      value:
        - s3FilesConfiguration:
            accessPointArn: "{{ accessPointArn }}"
            mountPath: "{{ mountPath }}"
            fileSystemArn: "{{ fileSystemArn }}"
          efsConfiguration:
            accessPointArn: "{{ accessPointArn }}"
            mountPath: "{{ mountPath }}"
            fileSystemArn: "{{ fileSystemArn }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_browser"
    values={[
        { label: 'delete_browser', value: 'delete_browser' }
    ]}
>
<TabItem value="delete_browser">

Deletes a custom browser.

```sql
DELETE FROM aws.bedrock_agentcore_control.browsers
WHERE browser_id = '{{ browser_id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>
