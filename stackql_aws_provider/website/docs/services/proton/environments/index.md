--- 
title: environments
hide_title: false
hide_table_of_contents: false
keywords:
  - environments
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

Creates, updates, deletes, gets or lists an <code>environments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="environments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.proton.environments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_environment"
    values={[
        { label: 'get_environment', value: 'get_environment' },
        { label: 'list_environments', value: 'list_environments' }
    ]}
>
<TabItem value="get_environment">

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
    <td>The name of the environment. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="codebuild_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM service role that allows Proton to provision infrastructure using CodeBuild-based provisioning on your behalf. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov):iam::\d&#123;12&#125;:role/(&#91;\w+=,.@-&#93;&#123;1,512&#125;&#91;/:&#93;)*(&#91;\w+=,.@-&#93;&#123;1,64&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="component_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in this environment. It determines the scope of infrastructure that a component can provision. The environment must have a componentRoleArn to allow directly defined components to be associated with the environment. For more information about components, see Proton components in the Proton User Guide. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov):iam::\d&#123;12&#125;:role/(&#91;\w+=,.@-&#93;&#123;1,512&#125;&#91;/:&#93;)*(&#91;\w+=,.@-&#93;&#123;1,64&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the environment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_status" /></td>
    <td><code>string</code></td>
    <td>The environment deployment status. (IN_PROGRESS, FAILED, SUCCEEDED, DELETE_IN_PROGRESS, DELETE_FAILED, DELETE_COMPLETE, CANCELLING, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_status_message" /></td>
    <td><code>string</code></td>
    <td>An environment deployment status message.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="environment_account_connection_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the environment account connection that's used to provision infrastructure resources in an environment account. (pattern: &lt;code&gt;^&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the environment account that the environment infrastructure resources are provisioned in. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_attempted_deployment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the last attempted deployment of this environment. (pattern: &lt;code&gt;^&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_deployment_attempted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when a deployment of the environment was last attempted.</td>
</tr>
<tr>
    <td><CopyableCode code="last_deployment_succeeded_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the environment was last deployed successfully.</td>
</tr>
<tr>
    <td><CopyableCode code="last_succeeded_deployment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the last successful deployment of this environment. (pattern: &lt;code&gt;^&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="proton_service_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Proton service role that allows Proton to make calls to other services on your behalf. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov):&#91;a-zA-Z0-9-&#93;+:&#91;a-zA-Z0-9-&#93;*:\d&#123;12&#125;:(&#91;\w+=,.@-&#93;+&#91;/:&#93;)*&#91;\w+=,.@-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="provisioning" /></td>
    <td><code>string</code></td>
    <td>When included, indicates that the environment template is for customer provisioned and managed infrastructure. (CUSTOMER_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="provisioning_repository" /></td>
    <td><code>object</code></td>
    <td>The linked repository that you use to host your rendered infrastructure templates for self-managed provisioning. A linked repository is a repository that has been registered with Proton. For more information, see CreateRepository.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>string</code></td>
    <td>The environment spec.</td>
</tr>
<tr>
    <td><CopyableCode code="template_major_version" /></td>
    <td><code>string</code></td>
    <td>The major version of the environment template. (pattern: &lt;code&gt;^(0|(&#91;1-9&#93;&#123;1&#125;\d*))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="template_minor_version" /></td>
    <td><code>string</code></td>
    <td>The minor version of the environment template. (pattern: &lt;code&gt;^(0|(&#91;1-9&#93;&#123;1&#125;\d*))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="template_name" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the environment template. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_environments">

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
    <td>The name of the environment. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="component_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in this environment. It determines the scope of infrastructure that a component can provision. The environment must have a componentRoleArn to allow directly defined components to be associated with the environment. For more information about components, see Proton components in the Proton User Guide. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov):&#91;a-zA-Z0-9-&#93;+:&#91;a-zA-Z0-9-&#93;*:\d&#123;12&#125;:(&#91;\w+=,.@-&#93;+&#91;/:&#93;)*&#91;\w+=,.@-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the environment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_status" /></td>
    <td><code>string</code></td>
    <td>The environment deployment status. (IN_PROGRESS, FAILED, SUCCEEDED, DELETE_IN_PROGRESS, DELETE_FAILED, DELETE_COMPLETE, CANCELLING, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_status_message" /></td>
    <td><code>string</code></td>
    <td>An environment deployment status message.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="environment_account_connection_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the environment account connection that the environment is associated with. (pattern: &lt;code&gt;^&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the environment account that the environment infrastructure resources are provisioned in. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_attempted_deployment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the last attempted deployment of this environment. (pattern: &lt;code&gt;^&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_deployment_attempted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when a deployment of the environment was last attempted.</td>
</tr>
<tr>
    <td><CopyableCode code="last_deployment_succeeded_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the environment was last deployed successfully.</td>
</tr>
<tr>
    <td><CopyableCode code="last_succeeded_deployment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the last successful deployment of this environment. (pattern: &lt;code&gt;^&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="proton_service_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Proton service role that allows Proton to make calls to other services on your behalf. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov):&#91;a-zA-Z0-9-&#93;+:&#91;a-zA-Z0-9-&#93;*:\d&#123;12&#125;:(&#91;\w+=,.@-&#93;+&#91;/:&#93;)*&#91;\w+=,.@-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="provisioning" /></td>
    <td><code>string</code></td>
    <td>When included, indicates that the environment template is for customer provisioned and managed infrastructure. (CUSTOMER_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="template_major_version" /></td>
    <td><code>string</code></td>
    <td>The major version of the environment template. (pattern: &lt;code&gt;^(0|(&#91;1-9&#93;&#123;1&#125;\d*))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="template_minor_version" /></td>
    <td><code>string</code></td>
    <td>The minor version of the environment template. (pattern: &lt;code&gt;^(0|(&#91;1-9&#93;&#123;1&#125;\d*))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="template_name" /></td>
    <td><code>string</code></td>
    <td>The name of the environment template. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
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
    <td><a href="#get_environment"><CopyableCode code="get_environment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get detailed data for an environment.</td>
</tr>
<tr>
    <td><a href="#list_environments"><CopyableCode code="list_environments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List environments with detail data summaries.</td>
</tr>
<tr>
    <td><a href="#create_environment"><CopyableCode code="create_environment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-spec"><code>spec</code></a>, <a href="#parameter-templateMajorVersion"><code>templateMajorVersion</code></a>, <a href="#parameter-templateName"><code>templateName</code></a></td>
    <td></td>
    <td>Deploy a new environment. An Proton environment is created from an environment template that defines infrastructure and resources that can be shared across services. You can provision environments using the following methods: Amazon Web Services-managed provisioning: Proton makes direct calls to provision your resources. Self-managed provisioning: Proton makes pull requests on your repository to provide compiled infrastructure as code (IaC) files that your IaC engine uses to provision resources. For more information, see Environments and Provisioning methods in the Proton User Guide.</td>
</tr>
<tr>
    <td><a href="#update_environment"><CopyableCode code="update_environment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-deploymentType"><code>deploymentType</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Update an environment. If the environment is associated with an environment account connection, don't update or include the protonServiceRoleArn and provisioningRepository parameter to update or connect to an environment account connection. You can only update to a new environment account connection if that connection was created in the same environment account that the current environment account connection was created in. The account connection must also be associated with the current environment. If the environment isn't associated with an environment account connection, don't update or include the environmentAccountConnectionId parameter. You can't update or connect the environment to an environment account connection if it isn't already associated with an environment connection. You can update either the environmentAccountConnectionId or protonServiceRoleArn parameter and value. You can’t update both. If the environment was configured for Amazon Web Services-managed provisioning, omit the provisioningRepository parameter. If the environment was configured for self-managed provisioning, specify the provisioningRepository parameter and omit the protonServiceRoleArn and environmentAccountConnectionId parameters. For more information, see Environments and Provisioning methods in the Proton User Guide. There are four modes for updating an environment. The deploymentType field defines the mode. NONE In this mode, a deployment doesn't occur. Only the requested metadata parameters are updated. CURRENT_VERSION In this mode, the environment is deployed and updated with the new spec that you provide. Only requested parameters are updated. Don’t include minor or major version parameters when you use this deployment-type. MINOR_VERSION In this mode, the environment is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can also specify a different minor version of the current major version in use. MAJOR_VERSION In this mode, the environment is deployed and updated with the published, recommended (latest) major and minor version of the current template, by default. You can also specify a different major version that's higher than the major version in use and a minor version.</td>
</tr>
<tr>
    <td><a href="#delete_environment"><CopyableCode code="delete_environment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an environment.</td>
</tr>
<tr>
    <td><a href="#accept_environment_account_connection"><CopyableCode code="accept_environment_account_connection" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>In a management account, an environment account connection request is accepted. When the environment account connection request is accepted, Proton can use the associated IAM role to provision environment infrastructure resources in the associated environment account. For more information, see Environment account connections in the Proton User guide.</td>
</tr>
<tr>
    <td><a href="#cancel_environment_deployment"><CopyableCode code="cancel_environment_deployment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-environmentName"><code>environmentName</code></a></td>
    <td></td>
    <td>Attempts to cancel an environment deployment on an UpdateEnvironment action, if the deployment is IN_PROGRESS. For more information, see Update an environment in the Proton User guide. The following list includes potential cancellation scenarios. If the cancellation attempt succeeds, the resulting deployment state is CANCELLED. If the cancellation attempt fails, the resulting deployment state is FAILED. If the current UpdateEnvironment action succeeds before the cancellation attempt starts, the resulting deployment state is SUCCEEDED and the cancellation attempt has no effect.</td>
</tr>
<tr>
    <td><a href="#reject_environment_account_connection"><CopyableCode code="reject_environment_account_connection" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>In a management account, reject an environment account connection from another environment account. After you reject an environment account connection request, you can't accept or use the rejected environment account connection. You can’t reject an environment account connection that's connected to an environment. For more information, see Environment account connections in the Proton User guide.</td>
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
    defaultValue="get_environment"
    values={[
        { label: 'get_environment', value: 'get_environment' },
        { label: 'list_environments', value: 'list_environments' }
    ]}
>
<TabItem value="get_environment">

Get detailed data for an environment.

```sql
SELECT
name,
arn,
codebuild_role_arn,
component_role_arn,
created_at,
deployment_status,
deployment_status_message,
description,
environment_account_connection_id,
environment_account_id,
last_attempted_deployment_id,
last_deployment_attempted_at,
last_deployment_succeeded_at,
last_succeeded_deployment_id,
proton_service_role_arn,
provisioning,
provisioning_repository,
spec,
template_major_version,
template_minor_version,
template_name
FROM aws.proton.environments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_environments">

List environments with detail data summaries.

```sql
SELECT
name,
arn,
component_role_arn,
created_at,
deployment_status,
deployment_status_message,
description,
environment_account_connection_id,
environment_account_id,
last_attempted_deployment_id,
last_deployment_attempted_at,
last_deployment_succeeded_at,
last_succeeded_deployment_id,
proton_service_role_arn,
provisioning,
template_major_version,
template_minor_version,
template_name
FROM aws.proton.environments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_environment"
    values={[
        { label: 'create_environment', value: 'create_environment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_environment">

Deploy a new environment. An Proton environment is created from an environment template that defines infrastructure and resources that can be shared across services. You can provision environments using the following methods: Amazon Web Services-managed provisioning: Proton makes direct calls to provision your resources. Self-managed provisioning: Proton makes pull requests on your repository to provide compiled infrastructure as code (IaC) files that your IaC engine uses to provision resources. For more information, see Environments and Provisioning methods in the Proton User Guide.

```sql
INSERT INTO aws.proton.environments (
codebuildRoleArn,
componentRoleArn,
description,
environmentAccountConnectionId,
name,
protonServiceRoleArn,
provisioningRepository,
spec,
tags,
templateMajorVersion,
templateMinorVersion,
templateName,
region
)
SELECT 
'{{ codebuildRoleArn }}',
'{{ componentRoleArn }}',
'{{ description }}',
'{{ environmentAccountConnectionId }}',
'{{ name }}' /* required */,
'{{ protonServiceRoleArn }}',
'{{ provisioningRepository }}',
'{{ spec }}' /* required */,
'{{ tags }}',
'{{ templateMajorVersion }}' /* required */,
'{{ templateMinorVersion }}',
'{{ templateName }}' /* required */,
'{{ region }}'
RETURNING
environment
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: environments
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the environments resource.
    - name: codebuildRoleArn
      value: "{{ codebuildRoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of the IAM service role that allows Proton to provision infrastructure using CodeBuild-based provisioning on your behalf. To use CodeBuild-based provisioning for the environment or for any service instance running in the environment, specify either the environmentAccountConnectionId or codebuildRoleArn parameter.
    - name: componentRoleArn
      value: "{{ componentRoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in this environment. It determines the scope of infrastructure that a component can provision. You must specify componentRoleArn to allow directly defined components to be associated with this environment. For more information about components, see Proton components in the Proton User Guide.
    - name: description
      value: "{{ description }}"
      description: |
        A description of the environment that's being created and deployed.
    - name: environmentAccountConnectionId
      value: "{{ environmentAccountConnectionId }}"
      description: |
        The ID of the environment account connection that you provide if you're provisioning your environment infrastructure resources to an environment account. For more information, see Environment account connections in the Proton User guide. To use Amazon Web Services-managed provisioning for the environment, specify either the environmentAccountConnectionId or protonServiceRoleArn parameter and omit the provisioningRepository parameter.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the environment.
    - name: protonServiceRoleArn
      value: "{{ protonServiceRoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of the Proton service role that allows Proton to make calls to other services on your behalf. To use Amazon Web Services-managed provisioning for the environment, specify either the environmentAccountConnectionId or protonServiceRoleArn parameter and omit the provisioningRepository parameter.
    - name: provisioningRepository
      description: |
        The linked repository that you use to host your rendered infrastructure templates for self-managed provisioning. A linked repository is a repository that has been registered with Proton. For more information, see CreateRepository. To use self-managed provisioning for the environment, specify this parameter and omit the environmentAccountConnectionId and protonServiceRoleArn parameters.
      value:
        branch: "{{ branch }}"
        name: "{{ name }}"
        provider: "{{ provider }}"
    - name: spec
      value: "{{ spec }}"
      description: |
        A YAML formatted string that provides inputs as defined in the environment template bundle schema file. For more information, see Environments in the Proton User Guide.
    - name: tags
      description: |
        An optional list of metadata items that you can associate with the Proton environment. A tag is a key-value pair. For more information, see Proton resources and tagging in the Proton User Guide.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: templateMajorVersion
      value: "{{ templateMajorVersion }}"
      description: |
        The major version of the environment template.
    - name: templateMinorVersion
      value: "{{ templateMinorVersion }}"
      description: |
        The minor version of the environment template.
    - name: templateName
      value: "{{ templateName }}"
      description: |
        The name of the environment template. For more information, see Environment Templates in the Proton User Guide.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_environment"
    values={[
        { label: 'update_environment', value: 'update_environment' }
    ]}
>
<TabItem value="update_environment">

Update an environment. If the environment is associated with an environment account connection, don't update or include the protonServiceRoleArn and provisioningRepository parameter to update or connect to an environment account connection. You can only update to a new environment account connection if that connection was created in the same environment account that the current environment account connection was created in. The account connection must also be associated with the current environment. If the environment isn't associated with an environment account connection, don't update or include the environmentAccountConnectionId parameter. You can't update or connect the environment to an environment account connection if it isn't already associated with an environment connection. You can update either the environmentAccountConnectionId or protonServiceRoleArn parameter and value. You can’t update both. If the environment was configured for Amazon Web Services-managed provisioning, omit the provisioningRepository parameter. If the environment was configured for self-managed provisioning, specify the provisioningRepository parameter and omit the protonServiceRoleArn and environmentAccountConnectionId parameters. For more information, see Environments and Provisioning methods in the Proton User Guide. There are four modes for updating an environment. The deploymentType field defines the mode. NONE In this mode, a deployment doesn't occur. Only the requested metadata parameters are updated. CURRENT_VERSION In this mode, the environment is deployed and updated with the new spec that you provide. Only requested parameters are updated. Don’t include minor or major version parameters when you use this deployment-type. MINOR_VERSION In this mode, the environment is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can also specify a different minor version of the current major version in use. MAJOR_VERSION In this mode, the environment is deployed and updated with the published, recommended (latest) major and minor version of the current template, by default. You can also specify a different major version that's higher than the major version in use and a minor version.

```sql
UPDATE aws.proton.environments
SET 
codebuildRoleArn = '{{ codebuildRoleArn }}',
componentRoleArn = '{{ componentRoleArn }}',
deploymentType = '{{ deploymentType }}',
description = '{{ description }}',
environmentAccountConnectionId = '{{ environmentAccountConnectionId }}',
name = '{{ name }}',
protonServiceRoleArn = '{{ protonServiceRoleArn }}',
provisioningRepository = '{{ provisioningRepository }}',
spec = '{{ spec }}',
templateMajorVersion = '{{ templateMajorVersion }}',
templateMinorVersion = '{{ templateMinorVersion }}'
WHERE 
region = '{{ region }}' --required
AND deploymentType = '{{ deploymentType }}' --required
AND name = '{{ name }}' --required
RETURNING
environment;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_environment"
    values={[
        { label: 'delete_environment', value: 'delete_environment' }
    ]}
>
<TabItem value="delete_environment">

Delete an environment.

```sql
DELETE FROM aws.proton.environments
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_environment_account_connection"
    values={[
        { label: 'accept_environment_account_connection', value: 'accept_environment_account_connection' },
        { label: 'cancel_environment_deployment', value: 'cancel_environment_deployment' },
        { label: 'reject_environment_account_connection', value: 'reject_environment_account_connection' }
    ]}
>
<TabItem value="accept_environment_account_connection">

In a management account, an environment account connection request is accepted. When the environment account connection request is accepted, Proton can use the associated IAM role to provision environment infrastructure resources in the associated environment account. For more information, see Environment account connections in the Proton User guide.

```sql
EXEC aws.proton.environments.accept_environment_account_connection 
@region='{{ region }}' --required 
@@json=
'{
"id": "{{ id }}"
}'
;
```
</TabItem>
<TabItem value="cancel_environment_deployment">

Attempts to cancel an environment deployment on an UpdateEnvironment action, if the deployment is IN_PROGRESS. For more information, see Update an environment in the Proton User guide. The following list includes potential cancellation scenarios. If the cancellation attempt succeeds, the resulting deployment state is CANCELLED. If the cancellation attempt fails, the resulting deployment state is FAILED. If the current UpdateEnvironment action succeeds before the cancellation attempt starts, the resulting deployment state is SUCCEEDED and the cancellation attempt has no effect.

```sql
EXEC aws.proton.environments.cancel_environment_deployment 
@region='{{ region }}' --required 
@@json=
'{
"environmentName": "{{ environmentName }}"
}'
;
```
</TabItem>
<TabItem value="reject_environment_account_connection">

In a management account, reject an environment account connection from another environment account. After you reject an environment account connection request, you can't accept or use the rejected environment account connection. You can’t reject an environment account connection that's connected to an environment. For more information, see Environment account connections in the Proton User guide.

```sql
EXEC aws.proton.environments.reject_environment_account_connection 
@region='{{ region }}' --required 
@@json=
'{
"id": "{{ id }}"
}'
;
```
</TabItem>
</Tabs>
